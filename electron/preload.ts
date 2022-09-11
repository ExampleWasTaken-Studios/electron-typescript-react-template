import { contextBridge, ipcRenderer } from "electron";
import { Channels } from "../common/Channels";

const app = {
  getAssetsPath: async (): Promise<string> => {
    return await ipcRenderer.invoke(Channels.GET_ASSETS_PATH);
  }
};

export const API = {
  app: app,
};

contextBridge.exposeInMainWorld("api", API);