import { app, BrowserWindow, ipcMain } from "electron"
import { selectCaseFile, selectSolutionFile } from "../src/system/managers/CaseManager"
import { readAndUpdate } from "../src/system/controllers/CaseController"
import Case from "../src/@types/Case"
import { initPythonTest } from "../src/system/controllers/TestController"
import { open } from "openurl"

export const registerListeners = (win: any) => {

	ipcMain.handle("open-url", (_, url) => {
		open(url)
	})

    ipcMain.handle("close-page", (_) => {
		app.exit()
	})

	ipcMain.handle("relaunch-page", (_) => {
		app.relaunch()
	})
	
	ipcMain.handle("minimize-page", (_) => {
		if (win) {
			win.minimize()
		}
	})

	ipcMain.handle("maximize-page", (_) => {
		if (win) {
			if (win.isMaximized()) {
				BrowserWindow.getFocusedWindow().unmaximize()
			} else {
				BrowserWindow.getFocusedWindow().maximize()
			}
		}
	})

    ipcMain.on('selected-case', (_, message) => {
        console.log(message)
    })

    ipcMain.handle('read-case', (_, directory: string) => {
        readAndUpdate(directory)
    })

    ipcMain.handle('open-read-case-dialog', () => {
        selectCaseFile()
    })

    ipcMain.handle('open-select-solution-dialog', () => {
        selectSolutionFile()
    })
    
    
    ipcMain.handle('execute-test', (_, values) => {
        const _case = values._case as Case
        initPythonTest(values.fileDirectory, _case)
    })
}