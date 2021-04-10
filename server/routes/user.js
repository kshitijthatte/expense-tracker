const router = require("express").Router();
const { createUser, getAllUsers, getUser } = require("../controllers/user");

router.post("/signup", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);

module.exports = router;
