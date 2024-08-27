const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: { type: Boolean, default: true },
});

userSchema.index({ email: 1 }); // Create an index on the email field

userSchema.plugin(mongoosePaginate); // Enable pagination

const User = mongoose.model('User', userSchema);

module.exports = User;
