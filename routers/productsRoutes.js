const express = require("express");
const router = express.Router();
const productsModel = require("../modal/products");

router.get("/", async (req, res) => {
  try {
    const role = await productsModel.find();
    res.json(role);
  } catch (error) {
    res.send("error" + error);
  }
});

router.post("/", async (req, res) => {
  const product = new productsModel({
    name: req.body.name,
    thumbnail: req.body.thumbnail,
    product_gallery: req.body.product_gallery,
    description: req.body.description,
    base_price: req.body.base_price,
    sell_price: req.body.sell_price,
    category_name: req.body.category_name,
    tags: req.body.tags,
    additional_information: req.body.additional_information,
  });

  try {
    const products2 = await product.save();
    res.json(products2);
  } catch (error) {
    res.send("error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const products = await productsModel.findById(req.params.id);
    res.json(products);
  } catch (error) {
    res.send("error" + error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatePost = await productsModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          base_price: req.body.base_price,
          sell_price: req.body.sell_price,
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
    const removeProduct = await productsModel.remove({ _id: req.params.id });
    res.json(removeProduct);
  } catch (error) {
    res.send("error" + error);
  }
});

module.exports = router;
