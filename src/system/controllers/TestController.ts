import { initTests } from "../managers/TestManager";
import { BrowserWindow } from "electron";
import { cloneFile } from "../utils/TestUtils";
import CaseType from "../../@types/CaseType";
import { generateLog } from "../managers/DebugManager";

async function initPythonTest(directory: string, _case: any) {
    try {
        const win = BrowserWindow.getAllWindows()[0]
        directory = String(await cloneFile(directory))
    
        const cases = [] as Array<CaseType>
    
        Array.from(_case.cases.entries()).forEach((v: CaseType) => {
            v = v[1]
    
            cases.push({
                name: v.name,
                inputs: v.inputs || [],
                outputs: v.outputs || [],
                error: "",
            })
        })
    
        initTests(directory, cases).then(data => {
            win.webContents.send("compiled-solution", data)
        }).catch(e => {
            win.webContents.send("error-compiled-solution", e)
        })
    } catch(e) {
        generateLog("initPythonTest() -> " + e)
    }
}

export {
    initPythonTest
}