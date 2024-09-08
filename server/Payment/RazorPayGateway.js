const razorPay = require("razorpay");

const rzInstance = new razorPay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

rzInstance.orders.create({
  amount: 500,
  currency: "INR",
  receipt: "receipt#1",
  notes: {
    key1: "value3",
    key2: "value2",
  },
});
