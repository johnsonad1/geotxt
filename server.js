/* jshint esversion: 6 */

const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

// GET routes

app.get('/', (req, res) => {
	res.render('landingPage');
});

app.get('/main', (req, res) => {
	res.render('main');
});

app.listen(3000, () => {
	console.log('GeoTXT listening on port 3000.');
});
