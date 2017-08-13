var parametersModel = require('../models/greenhouse.parameters.server.model');

exports.list = function (request, response, next) {
    parametersModel.run().then(function (parameters) {
        response.json(parameters);
    }).error(function (error) {
        return next(error);
    });
};

exports.findById = function (request, response, next, id) {
    parametersModel.get(id).run().then(function (parameters) {
        request.greenhouseParameters = parameters;
        next();
    }).error(function (error) {
        return next(error);
    });
};

exports.update = function (request, respose, next) {
    request.greenhouseParameters.merge(request.body).save().then(function (result) {
        respose.json(result);
    }).error(function (error) {
        return next(error);
    });
};

exports.delete = function (request, response, next) {
    request.greenhouseParameters.purge().then(function (result) {
        response.json(result);
    }).error(function (error) {
        return next(error);
    });
};

exports.create = function (request, response, next) {
    var parameters = new parametersModel(request.body);
    parameters.save(function (error, parameters) {
        if (error) {
            return next(error);
        } else {
            response.json(parameters);
        }
    }).error(function (error) {
        return next(error);
    });
};

exports.read = function (request, response) {
    response.json(request.greenhouseParameters);
};