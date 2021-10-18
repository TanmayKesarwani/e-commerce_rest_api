const express = require("express");
const router = express.Router();
const ordersModel = require("../modal/orders");

router.get("/", async (req, res) => {
  try {
    const order = await ordersModel.find();
    res.json(order);
  } catch (error) {
    res.send("error" + error);
  }
});

router.post("/", async (req, res) => {
  const order = new ordersModel({
    user_id: req.body.user_id,
    total_items: req.body.total_items,
    products: req.body.products,
    billing_address: req.body.billing_address,
    shipping_address: req.body.shipping_address,
    transaction_status: req.body.transaction_status,
    payment_mode: req.body.payment_mode,
    payment_status: req.body.payment_status,
    order_status: req.body.order_status,
  });

  try {
    const orders = await order.save();
    res.json(orders);
  } catch (error) {
    res.send("error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const order = await ordersModel.findById(req.params.id);
    res.json(order);
  } catch (error) {
    res.send("error" + error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatePost = await ordersModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          transaction_status: req.body.transaction_status,
          payment_status: req.body.payment_status,
          order_status: req.body.order_status,
        },
      }
    );
    res.json(updatePost);
  } catch (error) {
    res.send("error" + error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removeOrder = await ordersModel.remove({ _id: req.params.id });
    res.json(removeOrder);
  } catch (error) {
    res.send("error" + error);
  }
});

module.exports = router;
