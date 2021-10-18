const express = require("express");
const moongoose = require("mongoose");
const bodyParser = require("body-parser");

const url = "mongodb://127.0.0.1:27017/e-commerce_rest_api";
const app = express();

moongoose.connect(url, { useNewUrlParser: true });
const con = moongoose.connection;

con.on("open", function () {
  console.log("connected");
});

app.use(express.json());

const userRoute = require("./routers/userRoutes");
const categoriesRoute = require("./routers/categoriesRoutes");
const ordersRoute = require("./routers/ordersRoutes");
const productsRoute = require("./routers/productsRoutes");
const rolesRoute = require("./routers/rolesRoute");
const tagsRoute = require("./routers/tagsRoute");
const cartsRoute = require("./routers/cartsRoutes");

app.use("/users", userRoute);
app.use("/categories", categoriesRoute);
app.use("/orders", ordersRoute);
app.use("/products", productsRoute);
app.use("/roles", rolesRoute);
app.use("/tags", tagsRoute);
app.use("/carts", cartsRoute);

app.listen(9000, function () {
  console.log("server started");
});
