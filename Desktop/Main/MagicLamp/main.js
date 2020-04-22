const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Создаем окно браузера.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // и загрузить index.html приложения.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

