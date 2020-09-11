const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./routes/apiRouter");
const dbConnection = require("./db/connection");

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
  }

app.use(express.json());
app.use(cors());

app.use("/vacationdetective/v1", apiRouter);

module.exports = app;
