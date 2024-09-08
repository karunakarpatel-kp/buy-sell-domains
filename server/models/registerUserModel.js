const mongoose = require("mongoose");

const registerUserModel = mongoose.Schema({
  userName: { type: String, unique: true, required: true },
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phoneNumber: { type: String, unique: true, required: true },
  passWord: { type: String, required: true },
});

module.exports = mongoose.model("registerUserModel", registerUserModel);
