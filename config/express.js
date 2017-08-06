var config = require('./config');
var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport')

module.exports = function () {
    // Initialize app
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev')); // Use of logger
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress()); // Compress javascript for production
    }

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session({
        saveUnitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    app.all('*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    require('../app/routes/users.server.routes')(app);
    return app;
};