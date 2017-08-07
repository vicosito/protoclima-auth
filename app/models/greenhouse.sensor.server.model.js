var thinky = require('../../config/thinky');
var type = thinky.type;
var MicroControllerSchema = require('./greenhouse.microcontroller.server.model');

var SensorSchema = thinky.createModel('Sensor', {
    type: type.array().schema(type.string().enum('temperatura', 'humedad')).default(['temperatura']).required(),
    model: type.string().required(),
    microControllerId: type.string(),
    pin: type.string(),
    description: type.string()
});

SensorSchema.hasOne(MicroControllerSchema, 'Microcontrolador', 'id', 'microControllerId');

module.exports = SensorSchema;