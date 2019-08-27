const { app, BrowserWindow } = require("electron");

let win;

const createWindow = () => {
  win = new BrowserWindow();
  win.loadURL("https://can-leading.cn");
};

app.on("ready", createWindow);
