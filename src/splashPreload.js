const { contextBridge, ipcRenderer } = require('electron')

const channels = ["upd-available", "upd-not-available", "upd-down-progress", "upd-downloaded", "error"];

contextBridge.exposeInMainWorld('updater', {
    on: (channel, callback) => {
        if (!channels.includes(channel)) return;
        ipcRenderer.on(channel, (event, value) => callback(value));
    }
});
