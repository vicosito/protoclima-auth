var thinky = require('../../config/thinky');
var type = thinky.type;

var MicroControllerSchema = thinky.createModel('Microcontrolador', {
    model: type.string().required(),
    name: type.string().required(),
    description: type.string(),
    greenhouseId: type.string()
});

module.exports = MicroControllerSchema;