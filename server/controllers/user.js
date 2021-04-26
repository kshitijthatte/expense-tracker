const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.user = user;
    next();
  });
};

exports.getUser = (req, res) => {
  return res.json(req.user);
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.user.id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "Updation failed",
        });
      }
      res.json(user);
    }
  );
};
