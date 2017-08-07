var thinky = require('../../config/thinky');
var type = thinky.type;
var greenhouseParameters = require('./greenhouse.parameters.server.model');
var greenhouseMicroController = require('./greenhouse.microcontroller.server.model');

var GreenHouseSchema = thinky.createModel('greenhouse', {
    name: type.string().required(),
    product_name: type.string().required(),
    description: type.string(),
    state: type.boolean()
});
GreenHouseSchema.hasMany(greenhouseParameters, 'parametros', 'id', 'greenhouseId');
GreenHouseSchema.hasMany(greenhouseMicroController, 'microcontroladores', 'id', 'greenhouseId');
module.exports = GreenHouseSchema;