const express = require("express");
const router = express.Router();
const tagsModel = require("../modal/tags");

router.get("/", async (req, res) => {
  try {
    const role = await tagsModel.find();
    res.json(role);
  } catch (error) {
    res.send("error" + error);
  }
});

router.post("/", async (req, res) => {
  const tag = new tagsModel({
    name: req.body.name,
    slug: req.body.slug,
  });

  try {
    const tags2 = await tag.save();
    res.json(tags2);
  } catch (error) {
    res.send("error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await tagsModel.findById(req.params.id);
    res.json(category);
  } catch (error) {
    res.send("error" + error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatePost = await tagsModel.updateOne(
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
    const removeTag = await tagsModel.remove({ _id: req.params.id });
    res.json(removeTag);
  } catch (error) {
    res.send("error" + error);
  }
});

module.exports = router;
