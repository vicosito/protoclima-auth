var thinky, type, r, crypto;
thinky = require('../../config/thinky');
type = thinky.type;
r = thinky.r;
crypto = require('crypto');

var UserSchema;
UserSchema = thinky.createModel('user', {
    email: type.string().email().required().min(6),
    password: type.string().validator([function (password) {
        return password && password.length > 6;
    }, 'Password should be longer']),
    created: type.date().default(r.now()),
    salt: type.buffer(),
    provider: type.string().required(),
    providerId: type.string(),
    providerData: type.any()
});

UserSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

UserSchema.define('hashPassword', function (password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha1').toString('base64');
});

UserSchema.define('authenticate', function (password) {
    return this.password === this.hashPassword(password);
});

UserSchema.define('findUniqueUserEmail', function (email, suffix, callback) {
    var _this = this;
    var possibleEmail = email + (suffix || '');
    _this.get({email: possibleEmail}).run().then(
        function (error, user) {
            if (!error) {
                if (!user) {
                    callback(possibleEmail);
                } else {
                    return _this.findUniqueUserEmail(email, (suffix || 0) + 1, callback);
                }
            } else {
                callback(null);
            }

        }
    );
});

module.exports = UserSchema;