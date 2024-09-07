const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

const loginController = async (req, res, next) => {
  const { userName, passWord } = req.body;

  if (!userName || !passWord) {
    res.status(400);
    throw new Error("All Fields are required");
  }

  //?  When user enters the userName, we need to check it in the db using userName
  //! const user = await User.findOne({userName})
  // if there is no user with the userName entered by user
  let user = false;
  if (!user) {
    res.status(401);
    throw new Error("Authentication Failed or there is no user associated with the userName");
  }

  const userAvailable = await user.findOne({ userName });
  const dbHashedPassword = await userAvailable.passWord;
  const passWordMatch = await bcrypt.compare(dbHashedPassword, passWord);

  if (!passWordMatch) {
    res.status(401);
    throw new Error("Login Credentials are incorrect");
  }

  const token = await jwt.sign({ userId: user_id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });

  res.send({
    userName,
    token,
  });
};

module.exports = { loginController };
