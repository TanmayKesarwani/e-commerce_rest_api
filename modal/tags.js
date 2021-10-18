const moongose = require("mongoose");

const tagsSchema = moongose.Schema({
  name: String,
  slug: String,
});

const tagsModel = moongose.model("tags", tagsSchema);

module.exports = tagsModel;
