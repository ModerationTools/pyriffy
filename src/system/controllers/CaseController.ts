import { BrowserWindow } from "electron";
import { readCaseFile } from "../managers/CaseManager";

function readAndUpdate(directory: string) {
    const win = BrowserWindow.getAllWindows()[0]
    const readDirectory = readCaseFile(directory)
    
    if (readDirectory) {
        win.webContents.send("read-case", readDirectory)
    }
} 

export {
    readAndUpdate
}