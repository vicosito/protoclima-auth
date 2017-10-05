var passport = require('passport');
var user = require('../../app/controllers/users.server.controller');

module.exports = function (app) {
    app.param('userId', user.findById);
    app.post('/users/authenticate', passport.authenticate('local'), function (request, response) {
        response.json('autorizado');
    });
    app.post('/users', user.signUp);

    app.put('/users/:userId', user.update);

    app.get('/users', user.list);
    app.get('/users/:userId', user.findUserById);
    app.get('/users/logout', user.logout);

    app.delete('/users/:userId', user.delete);
};