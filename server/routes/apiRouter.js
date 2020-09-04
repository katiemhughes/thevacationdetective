const apiRouter = require("express").Router();

const {
  addDestination,
  returnAllDestinations,
} = require("../controllers/destinations");

const {
  addUser,
  returnAllUsers,
  signInAuthentication,
} = require("../controllers/user");

apiRouter.route("/");

apiRouter.route("/addUser").post(addUser);

apiRouter.route("/returnAllUsers").get(returnAllUsers);

apiRouter.route("/addDestination").post(addDestination);

apiRouter.route("/returnAllDestinations").get(returnAllDestinations);

apiRouter.route("/signInAuthentication").post(signInAuthentication);

module.exports = apiRouter;
