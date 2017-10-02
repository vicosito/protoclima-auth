var userModel = require('../models/users.server.model');
var passport = require('passport');

var getErrorMessage = function (error) {
    var message = '';

    if (error.code) {
        switch (error.code) {
            case 11000:
            case 10001:
                message = 'Email already exist';
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errorName in error.errors) {
            if (error.errors[errorName].message) {
                message = error.errors[errorName].message;
            }
        }
    }
};

exports.signUp = function (request, response, next) {
    if (!request.user) {
        var user = new userModel(request.body);
        var message = null;

        user.provider = 'local';
        user.save(function (error, user) {
            if (error) {
                message = getErrorMessage(error);
                request.flash('error', message);
                return response.json(message);
            }
            request.login(user, function (error) {
                if (error) {
                    return next(error);
                }
                return response.json('saveOk')
            })
        });
    } else {
        return response.json('ALREADY LOGIN');
    }
};

exports.list = function (request, response, next) {
    userModel.run().then(function (users) {
        response.json(users);
    }).error(function (error) {
        return next(error);
    });
};

exports.logout = function (request, response) {
    request.logout();
    response.redirect('/');
};

exports.delete = function (request, response, next) {
    request.user.purge().then(function (result) {
        response.json(request.user);
    }).error(function (error) {
        return next(error);
    })
};

exports.update = function (request, response, next) {
    userModel.get(request.user.id).run().then(function (user) {
        user.merge(request.body).save().then(function (result) {

        }).error(function (error) {
            return next(error);
        })
    }).error(function (error) {
        return next(error);
    });
};

exports.findById = function (request, response, next, id) {
    userModel.get(id).run().then(function (user) {
        request.user = user;
        next();
    }).error(function (error) {
        return next(error);
    });
};