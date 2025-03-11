const express = require("express");

const mongoose = require("mongoose");

const router = require("./routes/index");

const { PORT = 3001 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: "67d04cd61dd5269613af4e7b",
  };
  next();
});

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
