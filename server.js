process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var passport = require('./config/passport');

var app = express();
passport = passport();

app.listen(3000);
module.exports = app;