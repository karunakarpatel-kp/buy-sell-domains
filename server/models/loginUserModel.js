const mongoose = require("mongoose");

const loginUserSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true },
  passWord: { type: String, unique: true, required: true },
});

module.exports = mongoose.model("longUserSchema", loginUserSchema);
