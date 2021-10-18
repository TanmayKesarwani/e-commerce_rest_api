const express = require("express");
const router = express.Router();
const usersModel = require("../modal/users");

router.get("/", async (req, res) => {
  try {
    const user = await usersModel.find();
    res.json(user);
  } catch (error) {
    res.send("error" + error);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const user = new usersModel({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    profile_image: req.body.profile_image,
    role: req.body.role,
  });

  console.log(user);
  try {
    const user2 = await user.save();
    res.json(user2);
  } catch (error) {
    res.send("error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await usersModel.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.send("error" + error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatePost = await usersModel.updateOne(
      { _id: req.params.id },
      { $set: { last_name: req.body.last_name } }
    );
    res.json(updatePost);
  } catch (error) {
    res.send("error" + error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removeUser = await usersModel.remove({ _id: req.params.id });
    res.json(removeUser);
  } catch (error) {
    res.send("error" + error);
  }
});

module.exports = router;
