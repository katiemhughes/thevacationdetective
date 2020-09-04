const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./routes/apiRouter");
const dbConnection = require("./db/connection");

app.use(express.json());
app.use(cors());

app.use("/vacationdetective/v1", apiRouter);

module.exports = app;
