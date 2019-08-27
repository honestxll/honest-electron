const { app, BrowserWindow } = require('electron')
const path = require('path')

// 使用 electron-reload 硬重置加载
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_module', '.bin', 'electron')
})

let win

const createWindow = () => {
  win = new BrowserWindow({
    width: 960,
    height: 600,
    minWidth: 830,
    minHeight: 500,
    webPreferences: {
      // 需要在 electron 控制台 console 的地方执行 require('devtron').install()
      nodeIntegration: true
    },
    backgroundColor: '#f8f8f8'
  })

  win.loadURL(`file://${__dirname}/main.html`)

  win.on('close', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // 当用户关闭应用的时候，如果用户的操作系统不是 mac 系统，则会退出应用
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win == null) {
    createWindow()
  }
})
