const mongoose = require('mongoose');

const {Types: mongooseTypes} = mongoose.Schema;

const orderBlankSchema = new mongoose.Schema({
  status: mongooseTypes.String,
  company: {type: mongooseTypes.ObjectId, ref: 'Company'},
  operator: mongooseTypes.String,
  courier: mongooseTypes.String,
  order: {type: mongooseTypes.ObjectId, ref: 'Order'},
  debt: mongooseTypes.Number
});

Object.assign(orderBlankSchema.statics, {

});

const OrderBlank = mongoose.model('OrderBlank', orderBlankSchema);

module.exports = OrderBlank;
