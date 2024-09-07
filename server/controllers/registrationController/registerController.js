const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

const loginUserModel = require("../../models/loginUserModel");

const registerController = async (req, res, next) => {
  const { userName, fullName, email, phoneNumber, passWord, user_role, addressProof } = req.body;

  if (!userName || !fullName || !email || !phoneNumber || !passWord || !user_role || !addressProof) {
    res.status(400);
    throw new Error("All Fields are required");
  }

  const hashedPassword = await bcrypt.hash(passWord, 10);

  // ! Connection to DB
  const sendData = new loginUserModel({
    userName: "Hello",
    passWord: "Hello",
  });

  const data = await sendData.save();

  res.send({
    userName,
    fullName,
    email,
    phoneNumber,
    passWord: hashedPassword,
    user_role,
    addressProof,
    message: "message from backend server Bro...!",
    data,
  });
};

module.exports = { registerController };
