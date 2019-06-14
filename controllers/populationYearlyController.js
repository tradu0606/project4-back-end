const express = require('express');
const router = express.Router();
const PopulationYearly = require('../models/populationYearly');


router.get('/', (req, res) => {
	PopulationYearly.find({})
		.then((countries) => {
				return res.json(countries)
			})
		.catch((err) => {
			console.log(err);
		});
});
router.get('/2017', (req, res) => {
	PopulationYearly.find({}, {"2017":1, "CountryName":1,  _id:0})
		.then((countries) => {
				return res.json(countries)
			})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/country/:countryName', (req, res) => {
	PopulationYearly.find({ Country: req.params.countryName })
		.then((country) => {
				return res.json(country)
			})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;