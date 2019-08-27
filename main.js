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
    backgroundColor: '#f8f8f8'
  })
  win.loadURL(`file://${__dirname}/main.html`)
}

app.on('ready', createWindow)
