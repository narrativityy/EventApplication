const mongoose = require('mongoose');
const bcrycpt = require('bcrypt'); 

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [3, "{PATH} must be at least 3 chars {VALUE}"]
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLenght: [8, "{PATH} must be at least 8 chars {VALUE}"]
    }
}, {timestamps: true});

UserSchema.pre('save', function(next) {
    const user = this;
    bcrycpt.hash(user.password, 10, function(err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;