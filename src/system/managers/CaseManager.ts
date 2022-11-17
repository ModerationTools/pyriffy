import { BrowserWindow, dialog } from "electron";
import { readAndUpdate } from "../controllers/CaseController";
import { filterCases, formatCaseContent, formatCaseExerciseName } from "../utils/CaseUtils";
import { generateLog } from "./DebugManager";

const AdmZip = require("adm-zip");

function getCases(zipEntries: any) {
    const caseValues = new Map()
    const inouts = zipEntries.filter((entry: any) => entry.name.endsWith('.in') || entry.name.endsWith('.out'))
    let maxCase = 0

    inouts.forEach((inout: any) => {
        const content = formatCaseContent(inout.content)

        const index = Number(inout.name.split('.')[0])
        let indexValue = caseValues.get(String(index))
        maxCase = index > maxCase ? index : maxCase

        if (!indexValue) {
            indexValue = {
                name: String(index),

                inputs: [],
                outputs: []
            }
        }

        if (inout.name.endsWith('.in')) {
            if (indexValue) {
                indexValue.inputs = content
            } else {
                indexValue = {
                    inputs: content
                }
            }
        }

        if (inout.name.endsWith('.out')) {
            if (indexValue) {
                indexValue.outputs = content
            } else {
                indexValue = {
                    outputs: content
                }
            }
        }

        caseValues.set(String(index), indexValue)
    })

    return {maxCase, caseValues}
}

function readCaseFile(directory: string) {
    try {
        const zip = new AdmZip(directory);
        const zipEntries = zip.getEntries().map((entry: any) => {
            return {
                name: entry.name,
                path: entry.path,
                content: zip.readAsText(entry.name)
            }
        });

        
        const exerciseName = formatCaseExerciseName(zipEntries)
        const cases = getCases(zipEntries)
        const filteredCases = filterCases(cases.caseValues)    

        if (filteredCases.size !== 0) {
            return {
                name: exerciseName,
                path: directory,
                maxCase: cases.maxCase,
                cases: filterCases(cases.caseValues)
            }
        }

    } catch (e) {
        generateLog("readCaseFile() -> " + e)
        return {
            error: e
        }
    }

    return undefined 
}

function selectCaseFile() {
    dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [{
            name: "Arquivo do caso de teste",
            extensions: ['rar', 'zip']
        }],
        title: "Selecione o arquivo do caso de teste"
    }).then(result => {
        if (!result.canceled) {
            readAndUpdate(result.filePaths[0])
        }
    }).catch(e => {
        generateLog("selectCaseFile() -> " + e)
    })
}

function selectSolutionFile() {
    dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [{
            name: "Código Python",
            extensions: ['py']
        }],
        title: "Selecione o arquivo da solução do desafio"
    }).then(result => {
        if (!result.canceled) {
            const win = BrowserWindow.getAllWindows()[0]
            win.webContents.send("solution-selected", result.filePaths[0])
        }
    })
}

export {
    readCaseFile,
    selectCaseFile,
    selectSolutionFile
}