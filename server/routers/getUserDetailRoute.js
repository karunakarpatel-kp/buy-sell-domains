const express = require("express");
const getUserDetailsController = require("../controllers/getUserDetailsController");

const router = express.Router();

router.post("/getUserDetails", getUserDetailsController);

module.exports = router;
