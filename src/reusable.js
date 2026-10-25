const { Notification } = require('electron');
const path = require('path');

const appName = "BRClient";
const defaultIcon = path.join(__dirname, "..", "build", "br.ico");
const closeDialog = {
    type: 'none',
    title: appName,
    buttons: ['OK', 'Cancel'],
    cancelId: 1,
    icon: defaultIcon,
    message: `Would you like to close ${appName}?`
};
//* Game servers the client can load. devOnly ones are hidden from players and never saved
const environments = {
    normal: { label: 'Normal', url: 'https://buildroyale.io/' },
    event: { label: 'Tournament', url: 'https://staging.buildroyale.io/?tournament=1' },
    dev: { label: 'Local', url: 'http://127.0.0.1:8081/', devOnly: true }
};
//* Defaults for settings.json 'performance', applied at startup so changes need a restart
const defaultPerformance = {
    uncapFps: false, //* No vsync / frame rate limit: lower input latency, may tear and run hotter
    backgroundRunning: false, //* Keep timers and rendering at full speed while unfocused or hidden
    ignoreGpuBlocklist: true, //* Keep the canvas GPU accelerated on drivers Chromium blocklists
    highPerformanceGpu: true, //* Use the dedicated GPU on laptops with two
    angleBackend: null, //* 'd3d11', 'd3d9', 'gl' or null for Chromium's default
    highPriority: true //* Run the game's renderer and GPU processes above normal priority
};
const notify =(notif_title, notif_body) => {
    new Notification({ title: notif_title, body: notif_body }).show()
}
const formatBytes = (bytes, decimals = 2) => {
    if (!bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

module.exports = { appName, defaultIcon, closeDialog, environments, defaultPerformance, notify, formatBytes };
