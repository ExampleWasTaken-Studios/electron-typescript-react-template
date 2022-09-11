import { app, BrowserWindow, ipcMain } from "electron";
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import * as path from "path";
import { Channels } from "../common/Channels";

const ASSETS_PATH = app.isPackaged ? path.join(process.resourcesPath, "assets") : path.join(app.getAppPath(), "assets", "runtime");

let win: BrowserWindow | null = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      sandbox: false
    }
  });

  win.on("closed", () => win = null);

  if (app.isPackaged) {
    win.loadURL(`file://${path.join(__dirname, "../index.html")}`);
  } else {
    win.loadURL("http://localhost:3000/index.html");
  }

  if (!app.isPackaged) {
    // Hot Reloading
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("electron-reload") (__dirname, {
      electron: path.join(__dirname, "..", "..", "node_modules", ".bin", "electron"), // "node_modules/.bin/electron"
      forceHardReset: true,
      hardResetMethod: "exit"
    });

    // DevTools
    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => console.log(`Added Extension: ${name}`))
      .catch(err => console.log("An error occurred:", err));

    win.webContents.openDevTools(); 
  }

  win.on("ready-to-show", win.show);
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

ipcMain.handle(Channels.GET_ASSETS_PATH, () => {
  return ASSETS_PATH;
});