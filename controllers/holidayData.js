const Holiday = require("../models/holidayData");

exports.addHoliday = function (req, res, next) {
  const { destination, accommodation, restaurants, activities } = req.body;

  const newHoliday = new Holiday({
    destination,
    accommodation,
    restaurants,
    activities,
  });

  newHoliday.save((err) => {
    if (err) return next(err);
    else
      res.status(201).json({
        message: { msgBody: "Holiday successfully added", msgError: false },
      });
  });
};
