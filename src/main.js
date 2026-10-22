const { ipcMain, dialog, app, BrowserWindow, Menu } = require('electron');
const { autoUpdater } = require("electron-updater");
const log = require('electron-log/main');
const path = require('path');
const fs = require('fs');
const { Client } = require('discord-rpc');
const rpcManager = require("./rpcManager");
const { appName, defaultIcon, closeDialog, environments, formatBytes } = require("./reusable.js");

const isDev = !app.isPackaged;

//* Only one instance can use the data folder at a time, focus the running one instead
if (!app.requestSingleInstanceLock()) {
    app.exit(0);
}
app.on('second-instance', () => {
    const win = (mainWindow && !mainWindow.isDestroyed()) ? mainWindow : splash;
    if (!win || win.isDestroyed()) return;
    if (win.isMinimized()) win.restore();
    win.focus();
});

//* Carry over cookies/localStorage (game login, settings) from the old Delta Client data folder
const userDataPath = app.getPath('userData');
const legacyUserDataPath = path.join(app.getPath('appData'), 'delta-client');
if (!fs.existsSync(userDataPath) && fs.existsSync(legacyUserDataPath)) {
    try {
        fs.cpSync(legacyUserDataPath, userDataPath, { recursive: true });
    } catch (err) {
        log.error(`Failed to migrate user data: '${err}'`);
    }
}

/*
#####################################
        Environments
#####################################
*/

//* Dev is only offered when running from source, or with --env=dev on a packaged build
const envArg = process.argv.find(arg => arg.startsWith('--env='))?.slice('--env='.length);
const devAllowed = isDev || envArg === 'dev';
const isAllowedEnv = (env) => !!environments[env] && (devAllowed || !environments[env].devOnly);

const settingsPath = path.join(userDataPath, 'settings.json');
let settings = {};
try {
    settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
} catch { } //* Missing or broken file, use defaults
const saveSettings = () => {
    try {
        fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
    } catch (err) {
        log.error(`Failed to save settings: '${err}'`);
    }
};

//TODO: temporary while testing the env switcher, go back to 'normal' before release
const defaultEnv = devAllowed ? 'dev' : 'normal';
let currentEnv = [envArg, settings.env, defaultEnv].find(isAllowedEnv) ?? 'normal';

const windowTitle = () => currentEnv === 'normal' ? appName : `${appName} [${environments[currentEnv].label}]`;

function setEnv(env) {
    if (!isAllowedEnv(env) || env === currentEnv) return;
    currentEnv = env;
    //* Dev is never saved, so a normal launch can't get stuck on a localhost URL
    if (!environments[env].devOnly) {
        settings.env = env;
        saveSettings();
    }
    if (!mainWindow) return;
    mainWindow.setTitle(windowTitle());
    mainWindow.loadURL(environments[env].url);
}

function showEnvMenu() {
    if (!mainWindow) return;
    const items = Object.entries(environments)
        .filter(([id]) => isAllowedEnv(id))
        .map(([id, { label }]) => ({
            label,
            type: 'radio',
            checked: id === currentEnv,
            click: () => setEnv(id)
        }));
    Menu.buildFromTemplate(items).popup({ window: mainWindow });
}

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        title: windowTitle(),
        icon: defaultIcon,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.removeMenu();
    mainWindow.on('page-title-updated', (event) => event.preventDefault()); //* Keep our own title

    //* Only let the page open regular web pages (e.g. login popups)
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        return { action: /^https?:\/\//.test(url) ? 'allow' : 'deny' };
    });

    mainWindow.webContents.on('before-input-event', (event, input) => {
        if (input.type === 'keyDown') {
            if (input.key === 'F5') mainWindow.webContents.reload();
            else if (input.key === 'F11') mainWindow.setFullScreen(!mainWindow.isFullScreen());
            else if (input.key === 'F12') mainWindow.webContents.toggleDevTools();        } else if (input.type === 'keyUp' && input.key === 'Escape') {
            showCloseDialog();
        }
    });

    //* Swap the splash for the game once it has painted (or failed to load)
    const showMain = () => {
        if (mainWindow.isVisible()) return;
        mainWindow.show();
        if (splash && !splash.isDestroyed()) splash.close();
    };
    mainWindow.once('ready-to-show', showMain);
    mainWindow.webContents.once('did-fail-load', showMain);

    //* Reload or environment switch, forget the old game state until the new page reports
    mainWindow.webContents.on('did-navigate', () => {
        presence = null;
        queuePresence();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.loadURL(environments[currentEnv].url);
}

let closeDialogOpen = false;
async function showCloseDialog() {
    if (closeDialogOpen || !mainWindow) return;
    closeDialogOpen = true;
    try {
        const result = await dialog.showMessageBox(mainWindow, closeDialog);
        if (result.response === 0) app.quit();
    } finally {
        closeDialogOpen = false;
    }
}

let splash;
function splashWindow() {
    splash = new BrowserWindow({
        width: 1200, // 800 * 1.5
        height: 750, // 500 * 1.5
        center: true,
        skipTaskbar: false,
        icon: defaultIcon,
        alwaysOnTop: true,
        resizable: false,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true,
            preload: path.join(__dirname, 'splashPreload.js')
        },
    });
    splash.loadFile(path.join(__dirname, '..', 'public', 'loader.html'));
    splash.removeMenu();
    //splash.webContents.openDevTools();
}
const sendSplashMessage = (message, optionalExtras) => {
    if (!splash || splash.isDestroyed()) return;
    splash.webContents.send(message, optionalExtras);
}

let launched = false;
function launchClient() {
    if (launched) return;
    launched = true;
    createWindow();
}

ipcMain.handle("console", async () => {
    if (mainWindow) mainWindow.webContents.toggleDevTools();
});
ipcMain.handle("closeDialog", showCloseDialog);
ipcMain.handle("openEnvMenu", showEnvMenu);
ipcMain.handle("getEnv", () => ({ id: currentEnv, label: environments[currentEnv].label }));
ipcMain.on("sendLog", (event, value) => {
    log.info(value);
});


/*
#####################################
        autoUpdater
#####################################
*/

autoUpdater.on('update-available', (info) => {
    sendSplashMessage("upd-available");
});
autoUpdater.on('update-not-available', (info) => {
    sendSplashMessage("upd-not-available", app.getVersion());
    launchClient();
});
autoUpdater.on('download-progress', (progressObj) => {
    sendSplashMessage("upd-down-progress", {
        mbps: formatBytes(progressObj.bytesPerSecond),
        percent: progressObj.percent,
        transferred: formatBytes(progressObj.transferred),
        total: formatBytes(progressObj.total)
    });
});
autoUpdater.on('update-downloaded', (info) => {
    sendSplashMessage("upd-downloaded");

    setTimeout(() => {
        autoUpdater.quitAndInstall(true, true); //* Silent install, relaunch afterwards
    }, 3000);
});
autoUpdater.on('error', err => {
    log.error(`Error with autoupdater: '${err}'`);
    if (launched) return;
    //* Don't leave the user stuck on the splash if GitHub can't be reached
    sendSplashMessage("error");
    setTimeout(launchClient, 2000);
});

/*
#####################################
!        Ready event
#####################################
*/

app.whenReady().then(() => {
    splashWindow();

    if (isDev) {
        splash.webContents.once("did-finish-load", () => {
            sendSplashMessage("upd-not-available", app.getVersion());
            launchClient();
        });
    } else {
        autoUpdater.logger = log;
        autoUpdater.checkForUpdates().catch(() => {}); //* Handled by the 'error' event
    }
});

/*
#####################################
        Discord RPC
#####################################
*/

const client = new Client({ transport: 'ipc' });
let RPCManager = null;
let presence = null; //* Latest snapshot from the game, null until it sends one
let presenceTimer = null;
let lastPresenceSent = 0;
const PRESENCE_INTERVAL = 4000; //* Discord allows about 5 activity updates per 20 seconds

//* Coalesces bursts, always sends the newest snapshot
function queuePresence() {
    if (!RPCManager || presenceTimer) return;
    const wait = Math.max(0, lastPresenceSent + PRESENCE_INTERVAL - Date.now());
    presenceTimer = setTimeout(() => {
        presenceTimer = null;
        lastPresenceSent = Date.now();
        if (isDev) log.info(`Presence: ${JSON.stringify(presence)}`);
        RPCManager.render(presence, currentEnv === 'normal' ? null : environments[currentEnv].label);
    }, wait);
}

client.on('ready', () => {
    RPCManager = new rpcManager(client);
    log.info("Discord RPC connected");
    queuePresence();
});

ipcMain.on("presence", (event, json) => {
    if (!mainWindow || event.sender !== mainWindow.webContents) return;
    const snapshot = rpcManager.parse(json);
    if (!snapshot) return;
    presence = snapshot;
    queuePresence();
});

client.login({
    clientId: '1538528508391719023',
    redirectUri: 'https://buildroyale.io'
}).catch(err => {
    log.warn(`Discord RPC unavailable: '${err.message}'`);
});

/*
#####################################
        Usually not edited
#####################################
*/

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
