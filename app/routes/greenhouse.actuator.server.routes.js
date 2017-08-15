var actuator = require('../../app/controllers/greenhouse.actuator.server.controller');

module.exports = function (app) {
    app.param('greenhouseActuatorId', actuator.findById);
    app.get('/actuators', actuator.list);
    app.get('/actuators/:greenhouseActuatorId', actuator.read);
    app.post('/actuators', actuator.create);
    app.post('/actuators/:greenhouseActuatorId', actuator.update);
    app.delete('/actuators/:greenhouseActuatorId', actuator.delete);
};