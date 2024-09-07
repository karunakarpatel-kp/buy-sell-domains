const express = require("express");
const mongoose = require("mongoose");

const dbConnection = async (req, res, next) => {
  try {
    const mongooseConnection = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("SuccessFully Connected To DB", mongooseConnection.connection.host);
  } catch {
    console.log("Error Connecting To DB");
  }
};

module.exports = dbConnection;
