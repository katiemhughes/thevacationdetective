const Destination = require("../models/destinations");

exports.addDestination = function (req, res, next) {
  const {
    country,
    museums,
    beach,
    mountains,
    hiking,
    jungle,
    wildlife,
    citybreak,
    culturalEscape,
    skyscrapers,
    art,
    paradise,
    party,
    ancientMonuments,
    naturalWonders,
    highLife,
    desert,
    shopping,
    image,
    description,
  } = req.body;

  const newDestination = new Destination({
    country,
    museums,
    beach,
    mountains,
    hiking,
    jungle,
    wildlife,
    citybreak,
    culturalEscape,
    skyscrapers,
    art,
    paradise,
    party,
    ancientMonuments,
    naturalWonders,
    highLife,
    desert,
    shopping,
    image,
    description,
  });

  newDestination.save((err) => {
    if (err) return next(err);
    else
      res.status(201).json({
        message: { msgBody: "Destination successfully added", msgError: false },
      });
  });
};

exports.returnAllDestinations = function (req, res, next) {
  Destination.find(function (err, destinations) {
    if (err) return next(err);
    res.json({
      status: "success",
      message: "Destinations retrieved successfully",
      data: destinations,
    });
  });
};