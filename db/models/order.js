const mongoose = require('mongoose');

const {Types: mongooseTypes} = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  productOrderInfo: {type: mongooseTypes.ObjectId, ref: 'ProductOrderInfo'},
  date: mongooseTypes.Date,
  commonPrice: mongooseTypes.Number,
  number: mongooseTypes.Number
});

Object.assign(orderSchema.statics, {

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
