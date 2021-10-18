const moongose = require("mongoose");

const categoriesSchema = moongose.Schema({
  name: String,
  slug: String,
  image: String,
  description: String,
});

const categoriesModel = moongose.model("categories", categoriesSchema);

module.exports = categoriesModel;
