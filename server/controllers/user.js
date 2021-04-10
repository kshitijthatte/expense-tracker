const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
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

exports.getAllUsers = async (req, res) => {
  const users = await User.find({}).populate("transactions");
  res.json(users);
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id).populate("transactions");
  if (user) {
    res.json(user.toJSON());
  } else {
    res.status(404).end();
  }
};
