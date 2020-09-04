const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.addUser = async function (req, res, next) {
  let { firstName, lastName, userName, email, password } = req.body;

  const hash = await bcrypt.hashSync(password, 10);

  const newUser = new User({
    firstName,
    lastName,
    userName,
    email,
    password: hash,
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

// exports.signInAuthentication = function (req, res, next) {
//   let username = req.body.username;
//   let password = req.body.password;
//   User.findOne({ $or: [{ email: username }, { userName: username }] }).then(
//     (user) => {
//       console.log(user);
//       if (user) {
//         let result = bcrypt.compareSync(password, user.password);
//         console.log(result);
//         if (result) {
//           res.json({
//             message: "Log in successful",
//           });
//         } else {
//           res.json({
//             error: err.message,
//           });
//           console.log(user);
//         }
//       } else {
//         res.json({
//           message: "No user found",
//         });
//       }
//     }
//   );
// };

exports.signInAuthentication = function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  User.findOne({ $or: [{ email: username }, { userName: username }] }).then(
    async (user) => {
      if (user) {
        await bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err.message,
            });
            console.log(user.password);
          }
          if (result) {
            res.json({
              message: "Log in successful",
            });
          }
        });
      } else {
        res.json({
          message: "No user found",
        });
      }
    }
  );
};
