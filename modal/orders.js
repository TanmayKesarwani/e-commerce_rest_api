const moongose = require("mongoose");

const ordersSchema = moongose.Schema({
  user_id: String,
  total_items: Number,
  products: [{ type: String }],
  billing_address: String,
  payment_mode: {
    type: String,
    enum: ["online", "cash_on_delivery"],
  },
  shipping_address: String,
  transaction_status: {
    type: String,
    enum: ["failed", "success", "pending"],
  },
  payment_status: {
    type: String,
    enum: ["failed", "success", "pending"],
  },
  order_status: {
    type: String,
    enum: ["delivered", "not_delivered"],
  },
});

const ordersModel = moongose.model("orders", ordersSchema);

module.exports = ordersModel;
