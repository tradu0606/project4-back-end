const express = require('express');
const router = express.Router();
const CO2pollutionsPerCapita = require('../models/PollutionPerCapita');


router.get('/', (req, res) => {
	CO2pollutionsPerCapita.find({})
		.then((countries) => {
				return res.json(countries)
			})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/:countryName', (req, res) => {
	CO2pollutionsPerCapita.find({ Country: req.params.countryName })
		.then((country) => {
				return res.json(country)
			})
		.catch((err) => {
			console.log(err);
		});
});
module.exports = router;