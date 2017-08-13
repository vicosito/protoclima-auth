var microController = require('../../app/controllers/greenhouse.microcontroller.server.controller');

module.exports = function (app) {
    app.param('greenhouseMicroControllerId', microController.findById);
    app.get('/microControllers', microController.list);
    app.get('/microControllers/:greenhouseMicroControllerId', microController.read);
    app.post('/microControllers', microController.create);
    app.post('/microControllers/:greenhouseMicroControllerId', microController.update);
    app.delete('/microControllers/:greenhouseMicroControllerId', microController.delete);
};