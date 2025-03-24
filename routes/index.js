const router = require("express").Router();
const { login, createUser } = require("../controllers/users");
const { getItems } = require("../controllers/clothingItems");
const auth = require("../middlewares/auth");

const { NOT_FOUND } = require("../utils/errorConstants");

const userRouter = require("./users");
const itemRouter = require("./clothingItems");

router.post("/signin", login);
router.post("/signup", createUser);
router.get("/items", getItems);
router.use(auth);
router.use("/users", userRouter);
router.use("/items", itemRouter);
router.use((req, res) =>
  res.status(NOT_FOUND).send({ message: "The page was not found" })
);

module.exports = router;
