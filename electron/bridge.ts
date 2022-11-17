import { contextBridge, ipcRenderer } from 'electron'
import CaseType from '../src/@types/CaseType'

export const api = {
  openUrl: (url: string) => {
    ipcRenderer.invoke("open-url", url)
  },

  close: () => {
    return ipcRenderer.invoke("close-page")
  },
  
  relaunch: () => {
    ipcRenderer.invoke("relaunch-page");
  },
  
  minimize: () => {
    ipcRenderer.invoke("minimize-page");
  },
  
  maximize: () => {
    ipcRenderer.invoke("maximize-page");
  },

  openReadCaseDialog: () => {
    ipcRenderer.invoke('open-read-case-dialog')
  },

  openSelectSolutionDialog: () => {
    ipcRenderer.invoke('open-select-solution-dialog')
  },

  readCase: (directory: string) => {
    ipcRenderer.invoke('read-case', directory)
  },

  executeTest: (fileDirectory: string, _case: CaseType) => {
    ipcRenderer.invoke('execute-test', { fileDirectory, _case })
  },

  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  },
}

contextBridge.exposeInMainWorld('Main', api)
