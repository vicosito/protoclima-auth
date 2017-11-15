var greenhouse = require('../../app/controllers/greenhouse.server.controller');

module.exports = function (app) {
    app.param('greenhouseId', greenhouse.findById);
    app.post('/greenhouses', greenhouse.create);
    app.put('/greenhouses/:greenhouseId', greenhouse.update);
    app.get('/greenhouses', greenhouse.list);
    app.get('/greenhouses/:greenhouseId', greenhouse.read);
};