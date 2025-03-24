const router = require("express").Router();
const { patchCurrentUser, getCurrentUser } = require("../controllers/users");

router.get("/me", getCurrentUser);
router.patch("/me", patchCurrentUser);

module.exports = router;
