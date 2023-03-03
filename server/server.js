/**
 * -------------- SETUP ----------------
 **/

require("dotenv").config(); // dotenv
const express = require("express");

//--------------------------------------

// Express App
const app = express();

/**
 * -------------- DATABASE ----------------
 **/

/**
 * Connect to MongoDB Server using the connection string in the `.env` file.
 * To implement this, place the following string into the `.env` file
 * MONGODB_URI=mongodb://<user>:<password>@localhost:27017/database_name
 **/
// setup listner
app.listen(process.env.PORT, (req, res) => {
  console.log("Listening on port" + process.env.PORT);
});
/**
 * -------------- MIDDLEWARE ----------------
 **/

/**
 * -------------- ROUTES ----------------
 **/

//Index page at default entry route
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
});
