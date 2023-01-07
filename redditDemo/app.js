const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

// Set the view engine to EJS
app.set("view engine", "ejs");
// Set the views directory
app.set("views", path.join(__dirname, "views"));

// A middleware function that logs the request method and URL
app.use((req, res, next) => {
  console.log(req.method, req.url, "StatusCode:", res.statusCode);
  next();
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/random", (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  res.render("random", { number });
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
