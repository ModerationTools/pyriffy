import CaseType from "../../@types/CaseType";
import ChallengeOutputType from "../../@types/ChallengeOutputType";
import { generateLog } from "./DebugManager";

const { PythonShell } = require('python-shell');

async function initTest(fileDir: string, name: string, inputs: Array<string>, outputs: Array<string>) {
  return new Promise<{
    name: string,
    passed: boolean,
    output: Array<ChallengeOutputType>
  }> ((resolve, reject) => {
    const pyshell = new PythonShell(fileDir, { encoding: 'utf8'});
    const output = [] as Array<ChallengeOutputType>

    let passed = true
    let counter = 0
    pyshell.on("message", (message: string) => {
      if (message.endsWith('\r\n')) {
        message = (message + ">]-").replace("\r\n>]-", "")
      }

      const outputSplit = message.split('\r\n')
      outputSplit.forEach(o => {
        const wo = outputs[counter]
        const value = {
          index: counter,
          out: o,
          passed: false,
        } as ChallengeOutputType

        value.passed = wo ? wo === o : false
        passed = !!value.passed

        output.push(value)
        counter++
      })
    })

    inputs.forEach(entry => {
      pyshell.send(entry)
    })

    pyshell.end((error) => {
      if (error) {
        reject(error.message)
        return
      }

      // resolve({ name, passed, output })
      resolve({ name, passed: output.length !== outputs.length ? false : passed, output })
    })
  })
}

async function initTests(fileDir: string, cases: Array<CaseType>) {
  try {
    let passedAll = true
    let totalPassed = 0
    const storage = [] as Array<{
      passed: boolean,
      output: Array<ChallengeOutputType>
    }>
  
    for (const i in cases) {
      const _case = cases[i]
  
      const solved = await initTest(fileDir, _case.name, _case.inputs, _case.outputs)
      storage.push(solved)
  
      if (!solved.passed) {
        passedAll = false
      } else {
        totalPassed += 1
      }
    }
  
    return {
      passedAll,
      totalPassed,
      cases: storage
    }
  } catch (e) {
    generateLog("initTests() -> " + e)
  }
}

export {
    initTests
}