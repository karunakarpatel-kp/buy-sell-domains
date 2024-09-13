const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const logger = require("node-color-log");
const asyncHandler = require("express-async-handler");

const loginUserModel = require("../models/loginUserModel");
const registerUserModel = require("../models/registerUserModel");

const app = express();

const loginController = asyncHandler(async (req, res, next) => {
  const { userName, passWord } = req.body;

  if (!userName || !passWord) {
    res.status(401);
    let errorMsg = "All Fields are required";
    logger.error("All Fields are required");
    throw new Error(errorMsg);
  }

  const userNameFromDB = await registerUserModel.findOne({ userName });

  if (!userNameFromDB) {
    res.status(401);
    let msg = "Authentication Failed: There is no account associated with the userName";
    logger.error(msg);
    throw new Error(msg);
  }

  const dbHashedPassword = await userNameFromDB.passWord;

  const passWordMatch = await bcrypt.compare(passWord, dbHashedPassword);

  if (!passWordMatch) {
    res.status(401);
    throw new Error("Login Credentials are incorrect");
  }

  const token = jwt.sign({ userName: passWord }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });

  res.status(200).send({
    message: "User logged in successfully",
    userName,
    token,
  });
});

module.exports = { loginController };
