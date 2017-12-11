const mongoose = require('mongoose');

const {Types: mongooseTypes} = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name: mongooseTypes.String,
  shortName: mongooseTypes.String,
});

Object.assign(productSchema.statics, {

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;