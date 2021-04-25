const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    closeDialog: () => ipcRenderer.invoke("closeDialog"),
    reload: () => ipcRenderer.invoke("reload"),
    console: () => ipcRenderer.invoke("console"),
    fullscreen: () => ipcRenderer.invoke("fullscreen"),
    sendLog: (value) => ipcRenderer.invoke("sendLog", value),
    baserp: () => ipcRenderer.invoke("baserp")
});

window.addEventListener("keyup", function (e) {
    if (e.code == "Escape") {
        ipcRenderer.invoke("closeDialog");
    }
});

window.addEventListener("keydown", function (e) {
    if (e.code == "Space") {
        if (document.getElementById("loadingDesktop").style.display !== "none") ipcRenderer.invoke("console");
    }
});

window.addEventListener("keydown", function (e) {
    if (e.code == "KeyR") {
        if (document.getElementById("loadingDesktop").style.display !== "none") ipcRenderer.invoke("reload");
    }
});


//KeyR

window.onload = () => {
    let script = document.createElement("script");
    script.src = "https://cdn.socket.io/4.0.1/socket.io.min.js";
    script.crossOrigin = "anonymous";
    script.integrity = "sha384-LzhRnpGmQP+lOvWruF/lgkcqD+WDVt9fU3H4BWmwP5u5LTmkUGafMcpZKNObVMLU";
    document.head.appendChild(script);
}