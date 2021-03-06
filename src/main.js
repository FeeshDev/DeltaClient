const { ipcMain, dialog, globalShortcut, app, BrowserWindow, session } = require('electron');
const { autoUpdater } = require("electron-updater");
const log = require('electron-log');
const isDev = require('electron-is-dev');
const path = require('path');
const rpcManager = require("./rpcManager");
const fs = require("fs-extra");
const { defaultIcon, closeDialog, warning, notify, formatBytes } = require("./reusable.js");

const packageName = process.env.npm_package_name || "delta-client";

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Delta Client",
        icon: defaultIcon,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            sandbox: true,
            nativeWindowOpen: true,
            preload: path.join(__dirname, 'preload.js')
        },
        titleBarStyle: 'hidden'
    });
    mainWindow.loadURL('https://buildroyale.io/');

    mainWindow.removeMenu();
}

let splash;
function splashWindow() {
    splash = new BrowserWindow({
        width: 1200, // 800 * 1.5
        height: 750, // 500 * 1.5
        center: true,
        skipTaskbar: false,
        icon: "./build/icon.ico",
        alwaysOnTop: true,
        resizable: false,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    });
    splash.loadURL(`file://${__dirname}/../public/loader.html`);
    splash.removeMenu();
    //splash.openDevTools();
}
const sendSplashMessage = (message, optionalExtras) => {
    splash.webContents.send(message, optionalExtras);
}

function main() {
    createWindow();

    globalShortcut.register('F5', () => {
        if (!mainWindow.isFocused()) return;
        mainWindow.webContents.reload();
    });
    globalShortcut.register('F11', () => {
        if (!mainWindow.isFocused()) return;
        mainWindow.fullScreen = !mainWindow.fullScreen;
    });
    ipcMain.handle("console", async () => {
        mainWindow.webContents.isDevToolsOpened() ? mainWindow.webContents.closeDevTools() : mainWindow.webContents.openDevTools();
    });
    ipcMain.handle("closeDialog", async () => {
        let test = await dialog.showMessageBox(closeDialog);
        if (test.response === 0) app.quit();
    });
    ipcMain.handle("warning", async () => {
        await dialog.showMessageBox(warning);
    });

    let extPath = "";
    if (isDev) {
        extPath = path.resolve(__dirname, "..", "extension");
    } else {
        extPath = path.resolve(__dirname, "..", "..", "app.asar.unpacked", "extension");
    }
    log.info(`Extension location: '${extPath}'`);
    session.defaultSession.loadExtension(extPath).then(() => {
        mainWindow.loadURL('https://buildroyale.io/');
    });
}


/*
#####################################
        autoUpdater
#####################################
*/

autoUpdater.on('checking-for-update', async () => {
    var pendingPath = ""; //* Original path

    if (process.platform === "win32") pendingPath = path.resolve(process.env.LOCALAPPDATA, `${packageName}-updater/pending`); //* Windows
    else pendingPath = path.resolve(process.env.HOME, `${packageName}-updater/pending`); //* Any other platform
    //else if (process.platform === "linux") pendingPath = path.resolve(process.env.HOME, `${packageName}-updater/pending`);  //* may need to use this
    //else if (process.platform === "darwin") pendingPath = path.resolve(process.env.HOME, `${packageName}-updater/pending`); //* may need to use this

    try {
        await fs.remove(pendingPath) //! Await removal
    } catch (err) {
        console.error(err)
    }
});

autoUpdater.on('update-available', (info) => {
    sendSplashMessage("upd-available");
});
autoUpdater.on('update-not-available', (info) => {
    sendSplashMessage("upd-not-available", app.getVersion());
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

    app.relaunch();
    setTimeout(() => {
        app.exit(0);
    }, 3000);
});
autoUpdater.on('error', message => {
    sendSplashMessage("error");
    log.info(`Error with autoupdater: '${message}'`);
});

/*
#####################################
!        Ready event
#####################################
*/

app.once('ready', () => {
    splashWindow();

    if (isDev) {
        splash.webContents.on("did-finish-load", () => {
            sendSplashMessage("upd-not-available", app.getVersion());
            //app.relaunch();
            //sendSplashMessage("upd-downloaded");
        });
    } else {
        autoUpdater.logger = log;
        autoUpdater.checkForUpdates();
    }
});

/*
#####################################
        Usually not edited
#####################################
*/

const { Client } = require('discord-rpc');
const client = new Client({ transport: 'ipc' });
const login = async function () {
    await client.login({
        clientId: '831133438295539773',
        redirectUri: 'https://buildroyale.io'
    });
}

client.on('ready', () => {
    let RPCManager = new rpcManager(client);

    ipcMain.on("baserp", async () => {
        RPCManager.gameInfo.state = "base";
        RPCManager.states[RPCManager.gameInfo.state].setDefault();
    });
});

ipcMain.on("sendLog", async (bullshit, value) => {
    console.log(value)
});

ipcMain.on("launchClient", async () => {
    setTimeout(() => {
        main();
        splash.close();
    }, 5000);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})

login();