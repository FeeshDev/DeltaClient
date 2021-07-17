const { ipcMain, dialog, globalShortcut, app, BrowserWindow, session } = require('electron');
const log = require('electron-log');
const isDev = require('electron-is-dev');
const path = require('path');
const rpcManager = require("./rpcManager");
const fs = require("fs-extra");

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Delta Client",
        icon: "./build/icon.ico",
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

    /*
    setTimeout(() => {
        mainWindow.loadURL('https://buildroyale.io/');
    }, 100);
    */
}

const dialogOptions = {
    type: 'none',
    title: "Delta Client",
    buttons: ['OK', 'Cancel'],
    icon: "./build/icon.ico",
    message: 'Would you like to close Delta?'
};
ipcMain.handle("closeDialog", async () => {
    test = await dialog.showMessageBox(dialogOptions);
    if (test.response === 0) app.quit();
});

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
})

ipcMain.handle("sendLog", async (bullshit, value) => {
    console.log(value)
});

function main() {
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
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
}

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