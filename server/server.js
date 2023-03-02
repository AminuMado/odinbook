const express = require("express");

/**
 * -------------- SETUP ----------------
 **/
const app = express();

/**
 * -------------- DATABASE ----------------
 **/

/**
 * Connect to MongoDB Server using the connection string in the `.env` file.
 * To implement this, place the following string into the `.env` file
 * MONGODB_URI=mongodb://<user>:<password>@localhost:27017/database_name
 **/

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
