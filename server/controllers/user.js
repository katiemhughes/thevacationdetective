const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.addUser = async function (req, res, next) {
  const { firstName, lastName, userName, email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      res.json({
        message: "That email address is already associated with an account",
      });
    }
  });
  User.findOne({ userName: userName }).then((user) => {
    if (user) {
      res.json({
        message: "That username is already taken! Please choose another",
      });
    } else {
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
    }
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

exports.signInAuthentication = function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  User.findOne({
    $or: [{ email: username }, { userName: username }],
  }).then((user) => {
    if (user) {
      console.log(user);
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          res.send({
            message: "Log in successful",
            isLoggedIn: true,
            data: user._id,
          });
        } else if (err) {
          res.json({
            message: err.message,
            isLoggedIn: false,
          });
        } else if (!result) {
          res.json({
            message: "Password does not match the account",
            isLoggedIn: false,
          });
        }
      });
    } else {
      res.json({
        message: "No user found",
        isLoggedIn: false,
      });
    }
  });
};

// exports.addPreferences = function () {
//   take user ID - req.params
//   get preferences object - req.body
//   call update preferences by id function + pass in params.id + req.body
//   .then res.status(200).send(user object)
// }

exports.addUserDestination = function (req, res, next) {
  const { preferredDestination, userId } = req.body;

  User.findByIdAndUpdate(
    { _id: userId },
    { $push: { destinations: preferredDestination } },
    { new: true }
  ).then((user, err) => {
    if (!user) {
      res.json({
        message: "No user found",
      });
    }
    if (err) {
      res.json({
        message: err.message,
      });
    } else {
      res.json({
        message: "User destination updated",
        data: user,
      });
    }
  });
};

exports.findUserById = function (req, res, next) {
  const { userId } = req.body;
  User.findById({ _id: userId }).then((user, err) => {
    if (err) {
      res.json({
        message: err.message,
      });
    } else if (!user) {
      res.json({
        message: "No user has been found",
      });
    } else {
      res.json({
        message: "User found successfully",
        data: user,
      });
    }
  });
};
