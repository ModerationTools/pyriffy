const log = require('log-to-file');
const getHomePath = require('home-path')
const path = require("path")

const mainPath = path.join(getHomePath(), ".pyriffy_logs")

const makeDir = require('make-dir');
makeDir(mainPath)

function generateLog(data) {
    const date = new Date()
    const title =  date.toDateString()
    const dir = path.join(mainPath, `${title}.log`)

    log(data, dir)
}

export {
    log,
    generateLog
}