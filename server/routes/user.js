const router = require("express").Router();
const { getUserById, getUser, updateUser } = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/:userId", isSignedIn, isAuthenticated, updateUser);

module.exports = router;
