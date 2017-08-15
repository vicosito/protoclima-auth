var greenhouseSensor = require('../models/greenhouse.sensor.server.model');

exports.list = function (request, response, next) {
    greenhouseSensor.run().then(function (greenhouseSensor) {
        response.json(greenhouseSensor);
    }).error(function (error) {
        return next(error);
    });
};

exports.findById = function (request, response, next, id) {
    greenhouseSensor.get(id).run().then(function (greenhouseSensor) {
        request.greenhouseSensor = greenhouseSensor;
        next();
    }).error(function (error) {
        return next(error);
    });
};

exports.update = function (request, respose, next) {
    request.greenhouseSensor.merge(request.body).save().then(function (result) {
        respose.json(result);
    }).error(function (error) {
        return next(error);
    });
};

exports.delete = function (request, response, next) {
    request.greenhouseSensor.purge().then(function (result) {
        response.json(result);
    }).error(function (error) {
        return next(error);
    });
};

exports.create = function (request, response, next) {
    var greenhouseSensor = new greenhouseSensor(request.body);
    greenhouseSensor.save(function (error, greenhouseSensor) {
        if (error) {
            return next(error);
        } else {
            response.json(greenhouseSensor);
        }
    }).error(function (error) {
        return next(error);
    });
};

exports.read = function (request, response) {
    response.json(request.greenhouseSensor);
};