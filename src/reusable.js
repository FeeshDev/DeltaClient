const { Notification } = require('electron');

const defaultIcon = "./build/icon.ico";
const closeDialog = {
    type: 'none',
    title: "Delta Client",
    buttons: ['OK', 'Cancel'],
    icon: defaultIcon,
    message: 'Would you like to close Delta?'
};
const warning = {
    type: 'warning',
    title: 'Discontinued',
    message: 'Delta will be temporarily discontinued until further notice due to the recent purchase of buildroyale.io, we have great plans for the future.'
};
const notify = (notif_title, notif_body) => {
    new Notification({ title: notif_title, body: notif_body }).show()
}
const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

module.exports = { defaultIcon, closeDialog, warning, notify, formatBytes };