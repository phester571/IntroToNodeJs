const path = require('path')
const fs = require('fs')
const csv = require('csvtojson')
// const csvFilePath = path.join(__dirname, 'customer-data.csv')

convertFile = (csvFilePath=path.join(__dirname, 'customer-data.csv')) => {
    let buff = ''
    csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        buff += JSON.stringify(jsonObj, null, 2)
    })
    .on('done', (error) => {
        if (error) return `Error encountered: ${error}`
        let outFile = path.basename(csvFilePath, '.csv') + '.json'
        fs.writeFile(path.join(__dirname, outFile), buff, (error) => {
            if (error) console.log(`Error writing file: ${error}`)
            else console.log(`CSV to JSON conversion completed.  Results stored in ${outFile}`)
        })
    })
}

convertFile(process.argv[2])