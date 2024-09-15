const express = require("express");
const getAllListingController = require("../controllers/ListingsController/getAllListingController");
const addListingController = require("../controllers/ListingsController/addlistingController");

const router = express.Router();

router.get("/all-listing", getAllListingController);
router.post("/add-listing", addListingController);

module.exports = router;
