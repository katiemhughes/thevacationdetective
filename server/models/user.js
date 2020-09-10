const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 15,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 15,
  },
  userName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    bcrypt: true,
  },
  destinations: [
    {
      rank: { type: Number },
      country: { type: String },
      museums: { type: Boolean },
      beach: { type: Boolean },
      mountains: { type: Boolean },
      hiking: { type: Boolean },
      jungle: { type: Boolean },
      wildlife: { type: Boolean },
      citybreak: { type: Boolean },
      culturalEscape: { type: Boolean },
      skyscrapers: { type: Boolean },
      art: { type: Boolean },
      paradise: { type: Boolean },
      party: { type: Boolean },
      ancientMonuments: { type: Boolean },
      naturalWonders: { type: Boolean },
      highLife: { type: Boolean },
      desert: { type: Boolean },
      shopping: { type: Boolean },
      image: { type: String },
      description: { type: String },
    },
  ],
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});

const User = (module.exports = mongoose.model("User", userSchema));

module.exports.updateUserPreferences = function (user, preferences) {
  // take in user
  // take in preferences
  return User.findOneAndUpdate(
    { _id: user.id },
    { preferences: preferences },
    { new: true }
  );
};
