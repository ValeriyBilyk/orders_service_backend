const mongoose = require('mongoose');

const {Types: mongooseTypes} = mongoose.Schema;

const serviceSchema = new mongoose.Schema({
  name: mongooseTypes.String,
  shortName: mongooseTypes.String,
  company: {type: mongooseTypes.ObjectId, ref: 'Company'}
});

Object.assign(serviceSchema.statics, {

});

const Service = mongoose.model('Product', serviceSchema);

module.exports = Service;