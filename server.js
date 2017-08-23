/* jshint esversion: 6 */

const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// GET routes

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(3000, () => {
	console.log('GeoTXT listening on port 3000.');
});
