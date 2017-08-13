var thinky = require('../../config/thinky');
var type = thinky.type;
var MicroControllerSchema = require('./greenhouse.microcontroller.server.model');

var ActuatorSchema = thinky.createModel('Actuador', {
    type: type.array().schema(type.string().enum('ventilador', 'regadera')).default(['ventilador']).required(),
    relay: type.string(),
    microControllerId: type.string(),
    pin: type.string(),
    description: type.string()
});
ActuatorSchema.belongsTo(MicroControllerSchema, 'Microcontrolador', 'microControllerId', 'id');
module.exports = ActuatorSchema;