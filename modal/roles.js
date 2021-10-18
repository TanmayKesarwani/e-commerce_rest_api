const moongose = require("mongoose");

const rolesSchema = moongose.Schema({
  name: {
    type: String,
    enum: ["user", "admin", "staff"],
  },
  slug: String,
});

const rolesModal = moongose.model("roles", rolesSchema);

module.exports = rolesModal;
