const express = require("express");
const router = express.Router();
const cartsModel = require("../modal/carts");

router.get("/", async (req, res) => {
  try {
    const cart = await cartsModel.find();
    res.json(cart);
  } catch (error) {
    res.send("error" + error);
  }
});

router.post("/", async (req, res) => {
  const cart = new cartsModel({
    products: req.body.products,
    user: req.body.user,
    product_quantity: req.body.product_quantity,
    base_price: req.body.base_price,
    sell_price: req.body.sell_price,
    total_price: req.body.total_price,
  });

  try {
    const carts = await cart.save();
    res.json(carts);
  } catch (error) {
    res.send("error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const carts = await cartsModel.findById(req.params.id);
    res.json(carts);
  } catch (error) {
    res.send("error" + error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatePost = await cartsModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          base_price: req.body.base_price,
          sell_price: req.body.sell_price,
          total_price: req.body.total_price,
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
    const removeCart = await cartsModel.remove({ _id: req.params.id });
    res.json(removeCart);
  } catch (error) {
    res.send("error" + error);
  }
});

module.exports = router;
