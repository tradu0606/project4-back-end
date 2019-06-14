const express = require('express');
const router = express.Router();
const Population = require('../models/population');


router.get('/', (req, res) => {
	Population.find({})
		.then((countries) => {
				return res.json(countries)
			})
		.catch((err) => {
			console.log(err);
		});
});
router.get('/from1990', (req, res) => {
	Population.find({}, {"1990":1, "2000":1, "2005":1, "2010":1, "2012":1, "2014":1, "2015":1, "2016":1, "CountryName":1,  _id:0})
		.then((countries) => {
				return res.json(countries)
			})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/country/:countryName', (req, res) => {
	Population.find({ Country: req.params.countryName })
		.then((country) => {
				return res.json(country)
			})
		.catch((err) => {
			console.log(err);
		});
});




module.exports = router;