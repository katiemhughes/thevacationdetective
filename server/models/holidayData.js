const mongoose = require("mongoose");
const User = require("./user");
const Schema = mongoose.Schema;

const holidaySchema = new Schema({
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  destination: {
    type: String,
    required: true,
    unique: false,
  },
  accommodation: {
    type: Array,
    min: 1,
    max: 5,
    required: true,
    items: {
      type: String,
    },
  },
  restaurants: {
    type: Array,
    max: 5,
    required: false,
    items: {
      type: String,
    },
  },
  activities: {
    type: Array,
    max: 10,
    required: false,
    items: {
      type: String,
    },
  },
});

const Holiday = (module.exports = mongoose.model("Holiday", holidaySchema));

//Example of how to find holiday by specific user
//Look at mongoose populate method
// Holiday.find({})
// .populate('addedBy')
// .exec(function(err, post) {
//     do stuff with holiday
// });
