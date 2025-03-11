const router = require("express").Router();

const userRouter = require("./users");
const itemRouter = require("./clothingItems");

const missingResource = (req, res, next) => {};

router.use("/users", userRouter);
router.use("/items", itemRouter);

module.exports = router;
