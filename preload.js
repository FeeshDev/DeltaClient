const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    closeDialog: () => ipcRenderer.invoke("closeDialog"),
    reload: () => ipcRenderer.invoke("reload"),
    //enterLobby: () => ipcRenderer.invoke("enterLobby"),
    //enterMenu: () => ipcRenderer.invoke("enterMenu"),
    //updateTime: (value) => ipcRenderer.invoke("updateTime", value),
    //updatePlayers: (value) => ipcRenderer.invoke("updatePlayers", value),
    sendLog: (value) => ipcRenderer.invoke("sendLog", value)
});

window.addEventListener("keyup", function (e) {
    if (e.key == "Escape") {
        ipcRenderer.invoke("closeDialog");
    }
});

/*
window.addEventListener("keydown", function (e) {
    let reloadkey = 116;
    let binds = JSON.parse(localStorage.binds);
    if (binds !== undefined || binds.length !== 0) reloadkey = binds[21];
    if (e.keyCode == reloadkey) {
        ipcRenderer.invoke("reload");
    }
});
*/

window.onload = () => {
    let script = document.createElement("script");
    script.src = "https://cdn.socket.io/4.0.1/socket.io.min.js";
    script.crossOrigin = "anonymous";
    script.integrity = "sha384-LzhRnpGmQP+lOvWruF/lgkcqD+WDVt9fU3H4BWmwP5u5LTmkUGafMcpZKNObVMLU";
    document.head.appendChild(script);
}

//const socket = io("localhost:3344");