const express = require("express");

const app = express();

const loginController = (req, res, next) => {
  res.status(200);
  res.send({
    message: "Hello From Controller",
  });
};

module.exports = { loginController };
