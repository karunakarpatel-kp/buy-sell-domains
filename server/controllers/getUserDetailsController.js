const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const registerUserModel = require("../models/registerUserModel");

const getUserDetailsController = expressAsyncHandler(async (req, res, next) => {
  const reqAuthorization = req.headers.authorization || "";
  const splitToken = reqAuthorization.split(" ")[1];
  try {
    const jwtVerify = jwt.verify(splitToken, process.env.JWT_SECRET_KEY);
    const userNameFromDB = await registerUserModel.findOne({ userName: jwtVerify.userName });
    res.send(userNameFromDB);
  } catch (err) {
    throw new Error(err);
  }
  next();
});

module.exports = getUserDetailsController;
