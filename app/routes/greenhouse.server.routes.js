var greenhouse = require('../../app/controllers/greenhouse.server.controller');

module.exports = function (app) {
    app.param('greenhouseId', greenhouse.findById);
    app.get('/greenhouses', greenhouse.list);
    app.get('/greenhouses/:greenhouseId', greenhouse.read);
    app.post('/greenhouses', greenhouse.create);
    app.post('/greenhouses/:greenhouseId', greenhouse.update);
    app.delete('/greenhouses/:greenhouseId', greenhouse.delete);
};