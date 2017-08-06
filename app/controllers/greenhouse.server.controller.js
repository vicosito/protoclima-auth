var greenhouseModel = require('../models/greenhouse.server.model');


exports.list = function (request, response, next) {
    greenhouseModel.run().then(function (greenhouses) {
        response.json(greenhouses);
    }).error(function (error) {
        return next(error);
    });
};

exports.findById = function (request, response, next, id) {
    greenhouseModel.get(id).run().then(function (greenhouse) {
        request.greenhouse = greenhouse;
        next()
    }).error(function (error) {
        return next(error);
    });
};

exports.update = function (request, response, next) {
    request.greenhouse.merge(request.body).save().then(function (result) {
        response.json(result);
    }).error(function (error) {
        return next(error);
    });
};

exports.delete = function (request, response, next) {
    request.greenhouse.purge().then(function (result) {
        response.json(result);
    }).error(function (error) {
        return next(error);
    })

};

exports.create = function (request, response, next) {
    var greenhouse = new greenhouseModel(request.body);

    greenhouse.save(function (error, greenhouse) {
        if (error) {
            return next(error);
        } else {
            response.json(greenhouse);
        }
    }).error(function (error) {
        return next(error);
    });
};

exports.read = function (request, response) {
    response.json(request.greenhouse);
}
