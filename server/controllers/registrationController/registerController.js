const logger = require("node-color-log");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const registerUserModel = require("../../models/registerUserModel");

const registerController = asyncHandler(async (req, res, next) => {
  const { userName, fullName, email, phoneNumber, passWord } = req.body;

  if (!userName || !fullName || !email || !phoneNumber || !passWord) {
    res.status(400);
    let msg = "All fields are mandatory";
    logger.error(msg);
    throw new Error(msg);
  }

  const userNameFromDB = await registerUserModel.findOne({ userName });
  const phoneNumberFromDB = await registerUserModel.findOne({ phoneNumber });
  const emailFromDB = await registerUserModel.findOne({ email });

  if (userNameFromDB) {
    res.status(400);
    let msg = "UserName had already been registered with the system";
    logger.error(msg);
    throw new Error(msg);
  }

  if (phoneNumberFromDB) {
    res.status(400);
    let msg = "PhoneNumber had already been registered with the system";
    logger.error(msg);
    throw new Error(msg);
  }

  if (emailFromDB) {
    res.status(400);
    let msg = "Email had already been registered with the system";
    logger.error(msg);
    throw new Error(msg);
  }

  const hashedPassword = await bcrypt.hash(passWord, 10);

  const finalUserRegObj = await new registerUserModel({
    userName,
    fullName,
    email,
    phoneNumber,
    passWord: hashedPassword,
  });

  const saveDataToDB = await finalUserRegObj.save();

  res.send({ data: saveDataToDB, message: "User has successfully registerd" });
});

module.exports = { registerController };
