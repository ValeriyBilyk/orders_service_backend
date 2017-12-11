const mongoose = require('mongoose');

const {Types: mongooseTypes} = mongoose.Schema;

const companySchema = new mongoose.Schema({
  name: mongooseTypes.String,
  shortName: mongooseTypes.String,
});

Object.assign(companySchema.statics, {

});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
