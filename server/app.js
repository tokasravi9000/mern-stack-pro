const express = require("express");

const app = express();

// Default link
app.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

// about link page
app.get("/about", (req, res) => {
  res.send(`About Page from the server`);
});

// contact link page
app.get("/contact", (req, res) => {
  res.send(`Contact page from the server`);
});

// login link page
app.get("/login", (req, res) => {
  res.send(`Login page from the server`);
});

// signUp link page
app.get("/signup", (req, res) => {
  res.send(`sign up page from the server`);
});

app.listen(3001, () => {
  console.log(`Server is running at port no 3001`);
});
