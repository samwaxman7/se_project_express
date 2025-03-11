const express = require("express");
const mongoose = require("mongoose");
const { PORT = 3001 } = process.env;
const router = require("./routes/index");

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: "67d04cd61dd5269613af4e7b", // paste the _id of the test user created in the previous step
  };
  next();
});

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
