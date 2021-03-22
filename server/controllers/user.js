const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  const body = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    email: body.email,
    name: body.name,
    passwordHash,
  });

  const savedUser = await user.save();

  res.json(savedUser);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find({}).populate("transactions");
  res.json(users);
};
