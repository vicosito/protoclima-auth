var greenhouseMicroController = require('../models/greenhouse.microcontroller.server.model');

exports.list = function (request, response, next) {
    greenhouseMicroController.run().then(function (greenhouseMicroController) {
        response.json(greenhouseMicroController);
    }).error(function (error) {
        return next(error);
    });
};

exports.findById = function (request, response, next, id) {
    greenhouseMicroController.get(id).run().then(function (greenhouseMicroController) {
        request.greenhouseMicroController = greenhouseMicroController;
        next();
    }).error(function (error) {
        return next(error);
    });
};

exports.update = function (request, respose, next) {
    request.greenhouseMicroController.merge(request.body).save().then(function (result) {
        respose.json(result);
    }).error(function (error) {
        return next(error);
    });
};

exports.delete = function (request, response, next) {
    request.greenhouseMicroController.purge().then(function (result) {
        response.json(result);
    }).error(function (error) {
        return next(error);
    });
};

exports.create = function (request, response, next) {
    var greenhouseMicroController = new greenhouseMicroController(request.body);
    greenhouseMicroController.save(function (error, greenhouseMicroController) {
        if (error) {
            return next(error);
        } else {
            response.json(greenhouseMicroController);
        }
    }).error(function (error) {
        return next(error);
    });
};

exports.read = function (request, response) {
    response.json(request.greenhouseMicroController);
};