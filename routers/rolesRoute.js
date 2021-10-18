const express = require("express");
const router = express.Router();
const rolesModel = require("../modal/roles");

router.get("/", async (req, res) => {
  try {
    const role = await rolesModel.find();
    res.json(role);
  } catch (error) {
    res.send("error" + error);
  }
});

router.post("/", async (req, res) => {
  const role = new rolesModel({
    name: req.body.name,
    slug: req.body.slug,
  });

  try {
    const role2 = await role.save();
    res.json(role2);
  } catch (error) {
    res.send("error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await rolesModel.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.send("error" + error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatePost = await rolesModel.updateOne(
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
    const removeRole = await rolesModel.remove({ _id: req.params.id });
    res.json(removeRole);
  } catch (error) {
    res.send("error" + error);
  }
});

module.exports = router;
