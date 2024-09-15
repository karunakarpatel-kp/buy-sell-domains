const express = require("express");
const asyncHandler = require("express-async-handler");
const listingModel = require("../../models/listingModel");

const getAllListingController = asyncHandler(async (req, res, next) => {
  try {
    const getAllListings = await listingModel.find({});
    res.send(getAllListings);
  } catch (err) {
    res.send(err);
  }
});

module.exports = getAllListingController;
