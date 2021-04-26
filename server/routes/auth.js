const router = require("express").Router();
const { body } = require("express-validator");
const { login, signup } = require("../controllers/auth");

router.post(
  "/signup",
  body("name")
    .isLength({ min: 3 })
    .withMessage("Name should be at least 3 chars"),
  body("email").isEmail().withMessage("Email is required"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("Password should be at least 3 chars"),
  signup
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Email is required"),
  body("password").isLength({ min: 1 }).withMessage("Password is required"),
  login
);

module.exports = router;
