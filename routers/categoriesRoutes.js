const express = require("express");
const router = express.Router();
const categoriesModel = require("../modal/categories");

router.get("/", async (req, res) => {
  try {
    const role = await categoriesModel.find();
    res.json(role);
  } catch (error) {
    res.send("error" + error);
  }
});

router.post("/", async (req, res) => {
  const category = new categoriesModel({
    name: req.body.name,
    slug: req.body.slug,
    image: req.body.image,
    description: req.body.description,
  });

  try {
    const category2 = await category.save();
    res.json(category2);
  } catch (error) {
    res.send("error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await categoriesModel.findById(req.params.id);
    res.json(category);
  } catch (error) {
    res.send("error" + error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatePost = await categoriesModel.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.json(updatePost);
  } catch (error) {
    res.send("error" + error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removeCategory = await categoriesModel.remove({ _id: req.params.id });
    res.json(removeCategory);
  } catch (error) {
    res.send("error" + error);
  }
});

module.exports = router;
