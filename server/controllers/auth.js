const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const expressJwt = require("express-jwt");
const User = require("../models/user");

exports.signup = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ errors: errors.array()[0].msg, param: errors.array()[0].param });
  }

  const body = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const checkUser = await User.findOne({ email: body.email });
  console.log(checkUser);
  if (checkUser) {
    return res.status(401).json({
      error: "User already exists",
    });
  }

  const user = new User({
    email: body.email,
    name: body.name,
    passwordHash,
  });
  const savedUser = await user.save();
  res.json(savedUser);
};

exports.login = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ errors: errors.array()[0].msg, param: errors.array()[0].param });
  }

  const body = req.body;

  const user = await User.findOne({ email: body.email });
  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "Invalid email or password",
    });
  }

  const userForToken = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60,
  });

  res.status(200).send({
    token,
    email: user.email,
    name: user.name,
  });
};

exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  requestProperty: "auth",
  algorithms: ["HS256"],
});

exports.isAuthenticated = (req, res, next) => {
  let checker = req.user && req.auth && req.user.id == req.auth.id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};

exports.isAuthorized = (req, res, next) => {
  if (req.user.id !== req.transaction.user.toString()) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};
