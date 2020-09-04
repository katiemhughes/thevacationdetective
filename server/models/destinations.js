const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
  museums: {
    type: Boolean,
    required: true,
  },
  beach: {
    type: Boolean,
    required: true,
  },
  mountains: {
    type: Boolean,
    required: true,
  },
  hiking: {
    type: Boolean,
    required: true,
  },
  jungle: {
    type: Boolean,
    required: true,
  },
  wildlife: {
    type: Boolean,
    required: true,
  },
  citybreak: {
    type: Boolean,
    required: true,
  },
  culturalEscape: {
    type: Boolean,
    required: true,
  },
  skyscrapers: {
    type: Boolean,
    required: true,
  },
  art: {
    type: Boolean,
    required: true,
  },
  paradise: {
    type: Boolean,
    required: true,
  },
  party: {
    type: Boolean,
    required: true,
  },
  ancientMonuments: {
    type: Boolean,
    required: true,
  },
  naturalWonders: {
    type: Boolean,
    required: true,
  },
  highLife: {
    type: Boolean,
    required: true,
  },
  desert: {
    type: Boolean,
    required: true,
  },
  shopping: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Destination = (module.exports = mongoose.model(
  "Destination",
  destinationSchema
));
