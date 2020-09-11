const User = require("../models/user");
const bcrypt = require("bcrypt");
const destinations = require("../../client/src/Destinations");

exports.addUser = async function (req, res, next) {
  const { firstName, lastName, userName, email, password } = req.body;
  // if (password.length < 6) {
  //   res.json({
  //     message: "Password must be longer then 6 characters!",
  //   });
  // }
  if (!email.includes("@")) {
    res.json({
      message: "This must be a valid email address",
    });
  }
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
            success: true,
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

// exports.addUserDestination = function (req, res, next) {
//   const { preferredDestination, userId } = req.body;
//   User.findById({ _id: userId }).then((user, err) => {
//     for (let i = 0; i < 50; i++) {
//       if (preferredDestination.country == user.destinations[i].country) {
//         res.json({
//           message: "You have already saved this destination!",
//         });
//         break;
//       }
//     }
//   });
//   if (preferredDestination === null) {
//     return;
//   } else {
//     User.findByIdAndUpdate(
//       { _id: userId },
//       { $push: { destinations: preferredDestination } },
//       { new: true }
//     ).then((preferredDestination, user, err) => {
//       if (!user) {
//         res.json({
//           message: null,
//         });
//       }
//       if (err) {
//         res.json({
//           message: err.message,
//         });
//       } else {
//         res.json({
//           message: `You have saved ${preferredDestination.country} to your profile!`,
//           data: user,
//         });
//       }
//     });
//   }
// };

exports.addUserDestination = function (req, res, next) {
  const { preferredDestination, userId } = req.body;
  User.findByIdAndUpdate(
    { _id: userId },
    { $push: { destinations: preferredDestination } },
    { new: true }
  ).then((user, err) => {
    if (!user) {
      res.json({
        message: "You are not logged in!",
      });
    }
    if (err) {
      res.json({
        message: err.message,
      });
    } else {
      res.json({
        message: `You have saved ${preferredDestination.country} to your profile!`,
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

exports.deleteLastDestination = function (req, res, next) {
  const { userId } = req.body;
  User.findByIdAndUpdate(
    { _id: userId },
    { $pop: { destinations: 1 } },
    { new: true }
  ).then((user, err) => {
    if (!user) {
      res.json({
        message: "No user found",
      });
    } else if (err) {
      res.json({
        message: err.message,
      });
    }
  });
};

exports.deleteListItem = function (req, res, next) {
  const { userId, preferredDestination } = req.body;
  User.findByIdAndUpdate(
    { _id: userId },
    { $pull: { destinations: { country: preferredDestination.country } } },
    { new: true }
  ).then((user, err) => {
    if (!user) {
      res.json({
        message: "No user found",
      });
    } else if (err) {
      res.json({
        message: err.message,
      });
    } else {
      res.json({
        message: `Successfully deleted ${preferredDestination.country} from your saved destinations`,
      });
    }
  });
};
