import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

// bring the database in

var app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.resolve(__dirname, '../build')));

// Router - Bring these in from the routes

// Set our defualt route
app.use('/*', function (req, res) {
  res.redirect('/');
});

module.exports = app;
