const moongose = require("mongoose");

const productsSchema = moongose.Schema({
  name: String,
  thumbnail: String,
  product_gallery: [{ type: String }],
  description: String,
  base_price: Number,
  sell_price: Number,
  category_name: [{ type: String }],
  tags: [{ type: String }],
  additional_information: String,
});

const productsModel = moongose.model("products", productsSchema);

module.exports = productsModel;
