const { ipcMain, dialog, nativeImage, app, BrowserWindow, session } = require('electron');

const path = require('path');
const rpcManager = require("./rpcManager");

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
    ipcMain.handle("reload", async () => {
        mainWindow.webContents.reload()
    });
    ipcMain.handle("console", async () => {
        mainWindow.webContents.isDevToolsOpened() ? mainWindow.webContents.closeDevTools() : mainWindow.webContents.openDevTools();
    });
    ipcMain.handle("fullscreen", async () => {
        mainWindow.fullScreen = !mainWindow.fullScreen;
    });

    session.defaultSession.loadExtension(path.resolve(__dirname, "..", "public", "ext")).then(() => {
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

login();