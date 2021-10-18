const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  profile_image: String,
  role: {
    type: String,
    enum: ["user", "admin", "staff"],
  },
});

const userModal = mongoose.model("users", userSchema);

module.exports = userModal;
