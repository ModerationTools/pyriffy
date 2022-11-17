function formatCaseContent(content: string) {
    return content.includes('\r\n') ? content.split('\r\n') : [content]
}

function formatCaseExerciseName(zipEntries: any) {
    const readme = zipEntries.find((entry: any) => entry.name.endsWith('.txt'))
    if (readme) {
        const readmeSplit = readme.content.split('\n')
        return readmeSplit.length === 3 ? readmeSplit[2] : undefined
    }
    return undefined
}

function filterCases(cases: any) {
    cases.forEach((v: any, k: any) => {
        if (v.inputs.length === 0 || v.outputs.length === 0) {
            cases.delete(k)
        }
    })
    return cases
}

export {
    formatCaseContent,
    formatCaseExerciseName,
    filterCases
}