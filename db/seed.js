const pollution = require('./pollution.json')
const CO2pollutions = require('../models/Pollution')



CO2pollutions.deleteMany({}).then(() =>{
    CO2pollutions.create(pollution)
    .then(pollution => {
        console.log(pollution)
    })
    .catch(err => {
        console.log(err)
    })
})

