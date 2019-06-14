const pollution = require('./pollution.json')
const pollutionPerCapita = require('./pollution_per_capita.json')
const CO2pollutions = require('../models/Pollution')
const CO2pollutionsPerCapita = require('../models/PollutionPerCapita')
const populationJson = require('./population.json')
const Population = require('../models/population')
const PopulationYearlyJson = require('./populationYearly.json')
const PopulationYeary = require('../models/populationYearly')

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

Population.deleteMany({}).then(() =>{
    Population.create(populationJson)
    .then(() => {

    })
    .catch(err => {
        console.log(err)
    })
})
PopulationYeary.deleteMany({}).then(() =>{
    PopulationYeary.create(PopulationYearlyJson)
    .then(() => {

    })
    .catch(err => {
        console.log(err)
    })
})



