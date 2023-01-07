const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// Set the view engine to EJS
app.set("view engine", "ejs");
// Set the views directory
app.set("views", path.join(__dirname, "views"));

// A middleware function that logs the request method and URL
app.use((req, res, next) => {
  console.log(req.method, req.url, "StatusCode:", res.statusCode);
  next();
});
// Parse request bodies as JSON
app.use(bodyParser.json());

// Parse request bodies as URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

// A route that renders the index view
app.get("/", (req, res) => {
  res.render("index");
});

// A route that renders the search query
app.get("/search", (req, res) => {
  function search(query) {
    // Perform the search and return the results
    const results = [query];
    return results;
  }
  //   const { q } = req.query;
  //   console.log(q);
  //   if (!query) {
  //     res.send("<h1>Nothing found if nothing searched</h1>");
  //   } else {
  //     res.send(`<h1>Search results for ${q}</h1>`);
  //   }
  // Get the search query from req.query
  const query = req.query.q;

  // Perform the search and get the results
  const results = search(query);

  // Render the template with the search results
  res.render("search", { results: results });
});

// A route that renders the subreddit view
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`Subreddit of ${subreddit}`);
});

// A route that renders the subreddit comments view
app.get("/r/:subreddit/comments/:postID", (req, res) => {
  const { subreddit, postID } = req.params;
  res.send(`Viewing Post ID: ${postID} on the ${subreddit} Subreddit`);
});

// A route that renders the index view
app.get("/project/:projectname", (req, res) => {
  const { projectname } = req.params;
  res.render("project", { projectname });
});

app.listen(3000, () => {
  console.log("LISTENIN ON PORT 3000");
});
