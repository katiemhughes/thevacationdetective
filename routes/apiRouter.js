const apiRouter = require("express").Router();

const {
  addDestination,
  returnAllDestinations,
} = require("../controllers/destinations");

const {
  addUser,
  returnAllUsers,
  signInAuthentication,
  addUserDestination,
  findUserById,
  deleteLastDestination,
  deleteListItem,
} = require("../controllers/user");

apiRouter.route("/");

apiRouter.route("/addUser").post(addUser);

apiRouter.route("/returnAllUsers").get(returnAllUsers);

apiRouter.route("/findUserById").post(findUserById);

apiRouter.route("/addDestination").post(addDestination);

apiRouter.route("/returnAllDestinations").get(returnAllDestinations);

apiRouter.route("/addUserDestination").post(addUserDestination);

apiRouter.route("/deleteLastDestination").post(deleteLastDestination);

apiRouter.route("/deleteListItem").post(deleteListItem);

apiRouter.route("/signInAuthentication").post(signInAuthentication);

module.exports = apiRouter;
