const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const redditData = require("./data.json");

// Set the view engine to EJS
app.set("view engine", "ejs");
// Set the views directory
app.set("views", path.join(__dirname, "views"));
// Set the public directory
app.use(express.static(path.join(__dirname, "public")));

// A middleware function that logs the request method and URL
app.use((req, res, next) => {
  console.log(req.method, req.url, "StatusCode:", res.statusCode);
  next();
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/r/pokemon", (req, res) => {
  const pokemon = ["bulbasaur", "squirtle", "charmander", "pickachu"];
  res.render("pokemon", { pokemon });
});

app.get("/r/random", (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  const isEvenOrOdd = number % 2 === 0 ? "Number is even" : "Number is odd";
  res.render("random", { number, isEvenOrOdd, title: 'Random' });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { data });
    // {...data} using the spread operator, you can just call the properties instead of data.title, data.descrption, data.author, data.img
  } else {
    res.render("notfound", { subreddit });
  }
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
