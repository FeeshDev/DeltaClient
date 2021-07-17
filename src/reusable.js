const { Notification } = require('electron');

const defaultIcon = "./build/icon.ico";
const closeDialog = {
    type: 'none',
    title: "Delta Client",
    buttons: ['OK', 'Cancel'],
    icon: defaultIcon,
    message: 'Would you like to close Delta?'
};
const notify = (notif_title, notif_body) => {
    new Notification({ title: notif_title, body: notif_body }).show()
}

module.exports = { defaultIcon, closeDialog, notify };