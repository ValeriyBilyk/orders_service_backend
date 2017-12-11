const mongoose = require('mongoose');

const {Types: mongooseTypes} = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstName: mongooseTypes.String,
  lastName: mongooseTypes.String,
  street: mongooseTypes.String,
  country: mongooseTypes.String,
  houseNumber: mongooseTypes.String
});

Object.assign(userSchema.statics, {

});

const User = mongoose.model('User', userSchema);

module.exports = User;
