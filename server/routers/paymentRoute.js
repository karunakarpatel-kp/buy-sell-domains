const express = require("express");
const paymentController = require("../controllers/paymentController/paymentController");

const router = express.Router();

router.post("/order", paymentController);

module.exports = router;
