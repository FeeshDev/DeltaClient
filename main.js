const { ipcMain, dialog, nativeImage, app, BrowserWindow, session } = require('electron');

if (require('electron-squirrel-startup')) return app.quit();

const path = require('path');
const rpcManager = require("./rpcManager");
const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "https://buildroyale.io",
        methods: ["GET", "POST"]
    }
});

let mainWindow;
const icon = nativeImage.createFromPath(path.resolve(".", "assets", "delta.png"))
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Delta Client",
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            sandbox: true,
            nativeWindowOpen: true,
            preload: path.join(__dirname, 'preload.js')
        },
        icon,
        titleBarStyle: 'hidden'
    })

    mainWindow.removeMenu();

    mainWindow.webContents.openDevTools();

    setTimeout(() => {
        mainWindow.loadURL('https://buildroyale.io/');
    }, 100);
}

const dialogOptions = {
    type: 'none',
    title: "Delta Client",
    buttons: ['OK', 'Cancel'],
    icon,
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

    io.on("connection", (socket) => {
        socket.on("gameState", (state) => {
            if (state == RPCManager.gameInfo.state) return;
            if (RPCManager.gameInfo.state == "spec" && state == "menu") {
                RPCManager.gameInfo.state = "menu";
                RPCManager.states[RPCManager.gameInfo.state].setDefault();
                RPCManager.states[RPCManager.gameInfo.state].updateState();
            } else {
                RPCManager.gameInfo.state = state;
                RPCManager.states[RPCManager.gameInfo.state].setDefault();
            }
        });
        socket.on("gameInfo", (key, value) => {
            RPCManager.gameInfo[key] = value;
            if (typeof RPCManager.states[RPCManager.gameInfo.state].updateState == "function") RPCManager.states[RPCManager.gameInfo.state].updateState();
        });
        socket.on("test", () => {
            console.log("Socket Test Received!")
        });
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


    //mainWindow.fullScreen = true;
    session.defaultSession.loadExtension(path.resolve(__dirname, "ext"));
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

httpServer.listen(3344);
login();