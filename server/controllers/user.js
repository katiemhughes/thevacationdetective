const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.addUser = async function (req, res, next) {
  let { firstName, lastName, userName, email, password } = req.body;
  const newUser = new User({
    firstName,
    lastName,
    userName,
    email,
    password,
  });
  newUser.save((err) => {
    if (err) return next(err);
    else
      res.status(201).json({
        message: { msgBody: "User successfully added", msgError: false },
        data: newUser,
      });
  });
};

exports.returnAllUsers = function (req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json({
      status: "success",
      message: "Users retrieved successfully",
      data: users,
    });
  });
};

exports.signInAuthentication = async function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  await User.findOne({
    $or: [{ email: username }, { userName: username }],
  }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.json({
            error: err.message,
          });
        }
        if (result) {
          res.json({
            message: "Log in successful",
            loggedIn: true,
          });
        } else {
          res.json({
            message: "Password does not match the account",
          });
        }
      });
    } else {
      res.json({
        message: "No user found",
      });
    }
  });
};
