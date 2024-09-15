const dotEnv = require("dotenv");
// Load environment variables from .env file
dotEnv.config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const loginRoute = require("./routers/loginRoute.js");
const registerRoute = require("./routers/registerRoute.js");
const paymentRoute = require("./routers/paymentRoute.js");
const getUserDetailsRoute = require("./routers/getUserDetailRoute.js");
const listingsRoute = require("./routers/listingsRoute.js");

const { errorHandler } = require("./middlewares/errorMiddleware/errorHandler.js");
const dbConnection = require("./DBConnection/mongooseConnection.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// ?Connecting to DB Here
dbConnection();

// ? Adding Routes Below
app.use("/", loginRoute);
app.use("/", registerRoute);
app.use("/", paymentRoute);
app.use("/", getUserDetailsRoute);
app.use("/", listingsRoute);

app.listen(process.env.BACKEND_SERVER_PORT, () => {
  console.log(`Karunakar Patel's backend server running on port ${process.env.BACKEND_SERVER_PORT}`);
});

// ? Adding Error Middleware
app.use(errorHandler);
