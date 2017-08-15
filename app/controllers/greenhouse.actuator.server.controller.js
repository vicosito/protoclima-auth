var greenhouseActuator = require('../models/greenhouse.actuator.server.model');

exports.list = function (request, response, next) {
    greenhouseActuator.run().then(function (greenhouseActuator) {
        response.json(greenhouseActuator);
    }).error(function (error) {
        return next(error);
    });
};

exports.findById = function (request, response, next, id) {
    greenhouseActuator.get(id).run().then(function (greenhouseActuator) {
        request.greenhouseActuator = greenhouseActuator;
        next();
    }).error(function (error) {
        return next(error);
    });
};

exports.update = function (request, respose, next) {
    request.greenhouseActuator.merge(request.body).save().then(function (result) {
        respose.json(result);
    }).error(function (error) {
        return next(error);
    });
};

exports.delete = function (request, response, next) {
    request.greenhouseActuator.purge().then(function (result) {
        response.json(result);
    }).error(function (error) {
        return next(error);
    });
};

exports.create = function (request, response, next) {
    var greenhouseActuator = new greenhouseActuator(request.body);
    greenhouseActuator.save(function (error, greenhouseActuator) {
        if (error) {
            return next(error);
        } else {
            response.json(greenhouseActuator);
        }
    }).error(function (error) {
        return next(error);
    });
};

exports.read = function (request, response) {
    response.json(request.greenhouseActuator);
};