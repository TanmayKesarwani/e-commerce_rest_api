const moongose = require("mongoose");

const cartsSchema = moongose.Schema({
  products: [{ type: String }],
  user: String,
  product_quantity: Number,
  base_price: Number,
  sell_price: Number,
  total_price: Number,
});

const cartsModel = moongose.model("carts", cartsSchema);

module.exports = cartsModel;
