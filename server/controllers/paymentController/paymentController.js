const asynHandler = require("express-async-handler");
const razorPay = require("razorpay");
const logger = require("node-color-log");

const paymentController = asynHandler(async (req, res, next) => {
  const rzInstance = new razorPay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = req.body;

  const order = await rzInstance.orders.create(options);

  if (!order) {
    res.status(500);
    logger.error("Error with razorPay order");
    throw new Error("Error with razor pay order");
  }

  res.send(order);
});

module.exports = paymentController;
