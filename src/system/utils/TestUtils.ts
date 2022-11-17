import fs from "fs";
import { generateLog } from "../managers/DebugManager";

function cloneFile(directory: string) {
    return new Promise((resolve, reject) => {
        try {
            let data = fs.readFileSync(directory) as any
    
            if (data.toString().toLowerCase().includes("sys.stdout.reconfigure(encoding='utf-8')")) {
                return directory
            }
            
            data = data.toString().split("\n");
    
            data.splice(0, 0, `import sys\nsys.stdout.reconfigure(encoding='utf-8')\nsys.stdin.reconfigure(encoding='utf-8')\n`);
            const text = data.join("\n");
    
            directory = './code.py'
            fs.writeFile(directory, text, function (err) {
                if (err) reject(err)
                else resolve(directory)
            });
        } catch (e) {
            generateLog("cloneFile() -> " + e)
        }
    })
}

export {
    cloneFile
}