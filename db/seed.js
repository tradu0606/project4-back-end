const pollution = require('./pollution.json')
const pollutionPerCapita = require('./pollution_per_capita.json')
const CO2pollutions = require('../models/Pollution')
const CO2pollutionsPerCapita = require('../models/PollutionPerCapita')

CO2pollutions.deleteMany({}).then(() =>{
    CO2pollutions.create(pollution)
    .then(pollution => {
        console.log(pollution)
    })
    .catch(err => {
        console.log(err)
    })
})

CO2pollutionsPerCapita.deleteMany({}).then(() =>{
    CO2pollutionsPerCapita.create(pollutionPerCapita)
    .then(pollution => {
        console.log(pollution)
    })
    .catch(err => {
        console.log(err)
    })
})


