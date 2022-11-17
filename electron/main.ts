import { app, BrowserWindow } from 'electron'
import { registerListeners } from './listeners'
import path from 'path'

require("../src/system/main")

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 750,

    minWidth: 900,
    minHeight: 750,

    center: true,
    frame: false,
    icon: path.join(__dirname, "../assets/icon.png"),
    backgroundColor: "#F7F7F7",

    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY).then(r => console.log('URL loaded: ' + r))
  // mainWindow.webContents.toggleDevTools(); 

  registerListeners(mainWindow)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (mainWindow) {
      setTimeout(() => {
        mainWindow.webContents.send("version-ready", app.getVersion())
      console.log("SENT")
      console.log("SENT")
      console.log("SENT")
      console.log("SENT")
      console.log("SENT")
      console.log("SENT")
      console.log("SENT")
      console.log("SENT")
      console.log("SENT")
      console.log("SENT")
      console.log("SENT")
      console.log("SENT")
      }, 6000)
    }
  })
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

