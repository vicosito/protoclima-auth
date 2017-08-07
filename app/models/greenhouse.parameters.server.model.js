var thinky = require('../../config/thinky');
var type = thinky.type;

var GreenHouseParametersSchema = thinky.createModel('Parametros', {
    type: type.array().schema(type.string().enum('temperatura', 'humedad')).default(['temperatura']).required(),
    productName: type.string().required(),
    minimumLethal: type.number().min(1).required(),
    biologicalMinimum: type.number().min(1).required(),
    optimal: type.number().min(1).required(),
    maximumBiological: type.number().min(1).required(),
    maximumLethal: type.number().min(1).required(),
    greenhouseId: type.string()
});

module.exports = GreenHouseParametersSchema;