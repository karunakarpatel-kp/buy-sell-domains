const express = require("express");
const mongoose = require("mongoose");
const logger = require("node-color-log");

const dbConnection = async (req, res, next) => {
  try {
    const mongooseConnection = await mongoose.connect(process.env.MONGO_DB_URL);
    const msbObj = {
      message: "Successfull connected to DB",
      host: mongooseConnection.connection.host,
      name: mongooseConnection.connection.name,
    };
    logger.info(msbObj);
  } catch (err) {
    logger.error("Error Connecting to Database", err);
  }
};

module.exports = dbConnection;
