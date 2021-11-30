const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    closeDialog: () => ipcRenderer.invoke("closeDialog"),
    console: () => ipcRenderer.invoke("console"),
    sendLog: (value) => ipcRenderer.invoke("sendLog", value),
    baserp: () => ipcRenderer.invoke("baserp")
});

window.addEventListener("keyup", function (e) {
    if (e.code == "Escape") {
        ipcRenderer.invoke("closeDialog");
    }
});

window.addEventListener("keydown", function (e) {
    if (e.code == "F12") {
        ipcRenderer.invoke("console");
    }
});


//KeyR

window.onload = () => {
    if (localStorage.getItem("warning") != "true") {
        ipcRenderer.invoke("warning");
        localStorage.setItem("warning", "true");
    }
}