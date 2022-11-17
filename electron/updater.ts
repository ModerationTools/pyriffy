
const { BrowserWindow } = require("electron")
const { autoUpdater } = require('electron-updater');

const mainWindow = BrowserWindow.getFocusedWindow()

mainWindow.once('ready-to-show', () => {
    autoUpdater.checkForUpdatesAndNotify();
});

autoUpdater.on('update-available', () => {
    mainWindow.webContents.send('update_available');
});
autoUpdater.on('update-downloaded', () => {
    mainWindow.webContents.send('update_downloaded');
});

export {}