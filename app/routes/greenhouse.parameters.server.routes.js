var parameters = require('../../app/controllers/greenhouse.parameters.server.controller');
module.exports = function (app) {
    app.param('greenhouseParametersId', parameters.findById);
    app.get('/greenhouseParameters', parameters.list);
    app.get('/greenhouseParameters/:greenhouseParametersId', parameters.read);
    app.post('/greenhouseParameters', parameters.create);
    app.post('/greenhouseParameters/:greenhouseId', parameters.update);
    app.delete('/greenhouseParameters/:greenhouseParametersId', parameters.delete);
};