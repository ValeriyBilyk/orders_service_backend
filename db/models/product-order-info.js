const mongoose = require('mongoose');

const {Types: mongooseTypes} = mongoose.Schema;

const productOrderInfoSchema = new mongoose.Schema({
  productType: {type: mongooseTypes.ObjectId, ref: 'Product'},
  measurementUnit: mongooseTypes.String,
  value: mongooseTypes.Number,
  pricePerProduct: mongooseTypes.Number,
  totalPrice: mongooseTypes.Number
});

Object.assign(productOrderInfoSchema.statics, {

});

const ProductOrderInfo = mongoose.model('ProductOrderInfo', productOrderInfoSchema);

module.exports = ProductOrderInfo;

