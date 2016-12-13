// require stuff \\
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes.js');
    // create app\\
var app = express();
var PORT = process.env.PORT || 3000;

// connect to mongodb
mongoose.connect('mongodb://localhost/onlinejobapp', (err) => {
    if (err) {
        console.log('Error connecting to database', err);
    } else {
        console.log('Connected to database!');
    }
});
// middleware \\
// mount logger vertically to view front end requests to server \\
app.use(logger('dev'));
app.use(express.static('public'));

// ROUTES \\
routes(app);





app.listen(PORT, (err) => {
    if (err) {
        console.log('Error connecting to database: ', err);
    } else {
        console.log('Connection to port ', PORT, ' is good!');
    }
})
