/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

const fs = require('fs')
const json2csv = require('json2csv')

/*
-----------------------------------------------------------------------------------
|
| Parsing
|
-----------------------------------------------------------------------------------
*/

fs.readFile('./coop-augmented-reality-export.json', (err, data) => {
  const rootLevel = JSON.parse(data.toString())
  const dataPoints = rootLevel.data
  const dataAsArray = []

  Object.keys(dataPoints).forEach(key => {
    dataAsArray.push(dataPoints[key])
  })

  const fields = [
    'artoolkitStarted',
    'cameraOpened',
    'initMediaSource',
    'markerFoundAfter',
    'mediaSourceReady',
    'rendererIsReady'
  ]

  dataAsArray.forEach(sample => {
    Object.keys(sample).forEach(key => {
      if (key !== 'startTime') {
        sample[key] = Number(sample[key]) - Number(sample.startTime)
      }
    })
  })

  const csv = json2csv({ data: dataAsArray, fields: fields })

  fs.writeFile('./file.csv', csv, function(err) {
    if (err) throw err
    console.log('file saved')
  })
})
