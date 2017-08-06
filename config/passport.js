var userModel = require('../app/models/users.server.model');
var passport = require('passport');

module.exports = function () {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        userModel.get(id).run().then(function (user) {
            done(null, user);
        });
    });

    require('./strategies/local')();
};