const express = require("express");

const dotEnv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const loginRoute = require("./routers/loginRoute");

const app = express();

// Load environment variables from .env file
dotEnv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/", loginRoute);

app.listen(process.env.BACKEND_SERVER_PORT, () => {
  console.log(`Karunakar Patel's backend server running on port ${process.env.BACKEND_SERVER_PORT}`);
});
