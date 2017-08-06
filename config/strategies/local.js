var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../../app/models/users.server.model');

module.exports = function () {
    passport.use('local', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (request, email, password, done) {
        User.filter({
            email: email
        }).run(function (error, user) {
            if (error) {
                return done(error);
            }

            if (!user || user.length <= 0) {
                return done(null, false, {
                    message: 'Unknown user'
                });
            }

            if (!user[0].authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password'
                })
            }

            return done(null, user[0]);
        });
    }));
};