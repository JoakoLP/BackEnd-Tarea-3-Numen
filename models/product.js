const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Boolean,
    required: true,
  },
  stockAmount: {
    type: Number,
  },
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
});

const Product = mongoose.model("Producto", productSchema);

module.exports = { Product };
