'use strict';

const express = require('express')
const app = express();
const twitterSearch = require('./twitter-search');
const router = express.Router();
const bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {		
  res.header('Access-Control-Allow-Origin', "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');		
  res.header('Access-Control-Allow-Headers', 'Content-Type');		
  next();		
}		
		
app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
	res.send('Hello');
});

app.get('/api/search', function(req, res) {

	var parameter = req.query.parameter;
	var resultType = req.query.resultType;

	var results = twitterSearch(res, parameter, resultType);
})

var server = app.listen(port, function() {
	console.log('http://localhost:' + port)
});
