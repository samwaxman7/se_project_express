const router = require("express").Router();

const { NOT_FOUND } = require("../utils/errorConstants");

const userRouter = require("./users");
const itemRouter = require("./clothingItems");

router.use("/users", userRouter);
router.use("/items", itemRouter);
router.use((req, res) =>
  res.status(NOT_FOUND).send({ message: "The page was not found" })
);

module.exports = router;
