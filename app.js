const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");
const router = require("./routes/index");
const auth = require("./middlewares/auth");
const { login, createUser } = require("./controllers/users");
const { getItems } = require("./controllers/clothingItems");

const { PORT = 3001 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");

const app = express();

app.use(cors());
app.use(express.json());
app.post("/signin", login);
app.post("/signup", createUser);
app.get("/items", getItems);
app.use(auth);
app.use("/", router);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
