const express = require('express');
const app = express();
const parser = require('body-parser');
const pollutionController = require('./controllers/pollutionController');

const cors = require('cors');

app.use(parser.json());

app.use(cors());

app.use('/pollutions', pollutionController);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});