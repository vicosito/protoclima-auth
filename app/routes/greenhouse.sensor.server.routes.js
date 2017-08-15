var sensor = require('../../app/controllers/greenhouse.sensor.server.controller');

module.exports = function (app) {
    app.param('greenhouseSensorId', sensor.findById);
    app.get('/sensors', sensor.list);
    app.get('/sensors/:greenhouseSensorId', sensor.read);
    app.post('/sensors', sensor.create);
    app.post('/sensors/:greenhouseSensorId', sensor.update);
    app.delete('/sensors/:greenhouseSensorId', sensor.delete);
};