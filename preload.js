const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    closeDialog: () => ipcRenderer.invoke("closeDialog"),
    reload: () => ipcRenderer.invoke("reload"),
    sendLog: (value) => ipcRenderer.invoke("sendLog", value)
});

window.addEventListener("keyup", function (e) {
    if (e.key == "Escape") {
        ipcRenderer.invoke("closeDialog");
    }
});

window.onload = () => {
    let script = document.createElement("script");
    script.src = "https://cdn.socket.io/4.0.1/socket.io.min.js";
    script.crossOrigin = "anonymous";
    script.integrity = "sha384-LzhRnpGmQP+lOvWruF/lgkcqD+WDVt9fU3H4BWmwP5u5LTmkUGafMcpZKNObVMLU";
    document.head.appendChild(script);
}