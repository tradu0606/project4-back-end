const mongoose = require('../connections');

const CO2pollutionsPerCapita = new mongoose.Schema({
    1990: String,
    2000: String,
    2005: String,
    2010: String,
    2012: String,
    2014: String,
    2015: String,
    2016: String,
    Country: String
});

module.exports = mongoose.model('CO2pollutionsPerCapita', CO2pollutionsPerCapita);