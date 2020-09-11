require("dotenv").config();

const mongoose = require("mongoose");
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;
const dbCluster = process.env.DB_CLUSTER;

const mongoDB = `mongodb+srv://${user}:${pass}@${dbCluster}/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
  useCreateIndex: true,
});

const db = mongoose.connection.on("error", (error) => {
  console.log(error);
});

if (!db) console.log("Error connecting db");
else console.log("db connected successfully");

module.exports = mongoose;
