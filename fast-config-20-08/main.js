const {app, BrowserWindow} = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 1030,
        height: 680,
        center: true,
        frame: true,
        maximizable: false,
        minimizable: true,
        autoHideMenuBar: true,
        resizable: true,
        webPreferences: {
            preload: path.join(__dirname, "preloader.js"),
        }
    })
    win.loadURL("http://localhost:3000");
}
app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})
