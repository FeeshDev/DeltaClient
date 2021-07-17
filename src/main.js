const { ipcMain, dialog, globalShortcut, app, BrowserWindow, session } = require('electron');
const { autoUpdater } = require("electron-updater");
const log = require('electron-log');
const isDev = require('electron-is-dev');
const path = require('path');
const rpcManager = require("./rpcManager");
const fs = require("fs-extra");
const { defaultIcon, closeDialog, notify } = require("./reusable.js");
const package = require("../package.json");

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
    })

    mainWindow.removeMenu();
}

ipcMain.handle("closeDialog", async () => {
    test = await dialog.showMessageBox(closeDialog);
    if (test.response === 0) app.quit();
});

function main() {
    autoUpdater.checkForUpdatesAndNotify();
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

    let extPath = "";
    if (isDev) extPath = path.resolve(__dirname, "..", "extension")
    else extPath = path.resolve(__dirname, "..", "..", "app.asar.unpacked", "extension")
    log.info(`Extension location: '${extPath}'`);
    session.defaultSession.loadExtension(extPath).then(() => {
        mainWindow.loadURL('https://buildroyale.io/');
    });

    notify(`Delta v${package.version} is running!`);

    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
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
    notify("Update available!", "Downloading update... please do not close Delta Client.");
});

autoUpdater.on('update-downloaded', (info) => {
    notify("Update downloaded!", "You can now restart the app to see the new version.");
});

autoUpdater.on('error', message => {
    log.info(`Error with autoupdater: '${message}'`);
    notify("There was an error running the auto updater!", "Please check your logs for further information.");
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

    ipcMain.handle("baserp", async () => {
        RPCManager.gameInfo.state = "base";
        RPCManager.states[RPCManager.gameInfo.state].setDefault();
    });
});

ipcMain.handle("sendLog", async (bullshit, value) => {
    console.log(value)
});

app.whenReady().then(main);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})

login();