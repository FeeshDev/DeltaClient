const { contextBridge, ipcRenderer } = require('electron')

//* Keyboard shortcuts (F5, F11, F12, Escape) are handled in main.js via 'before-input-event'
contextBridge.exposeInMainWorld('api', {
    closeDialog: () => ipcRenderer.invoke("closeDialog"),
    console: () => ipcRenderer.invoke("console"),
    openEnvMenu: () => ipcRenderer.invoke("openEnvMenu"),
    getEnv: () => ipcRenderer.invoke("getEnv"),
    sendLog: (value) => ipcRenderer.send("sendLog", value)
});

//* The game reports its state as a JSON string (objects don't cross the isolated world), validated in main
window.addEventListener("brclient:presence", (event) => {
    if (typeof event.detail === "string") ipcRenderer.send("presence", event.detail);
});
