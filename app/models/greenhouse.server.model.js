var thinky = require('../../config/thinky');
var type = thinky.type;
var r = thinky.r;

var GreenHouseSchema = thinky.createModel('greenhouse', {
    name: type.string().required(),
    product_name: type.string().required(),
    description: type.string(),
    state: type.boolean()
});

module.exports = GreenHouseSchema;