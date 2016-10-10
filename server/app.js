var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');

// bring the database in

var app = express();
var port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.resolve(__dirname, '../dist')));

// Router - Bring these in from the routes

// Set our defualt route
// app.use('/*', function (req, res) {
//   res.redirect('/');
// });

app.listen(port);
console.log('Server started!');

module.exports = app;
