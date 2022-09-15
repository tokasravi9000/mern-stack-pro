const mongoose = require("mongoose");
const express = require("express");

const app = express();

const DB =
  "mongodb+srv://twork:Twork%232020@cluster0.z0hjj.mongodb.net/Mern-stack?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
  })
  .then(() => {
    console.log(`Connection successful`);
  })
  .catch((err) => {
    console.log(`DB not connected`, err);
  });

// Middleware
const middleware = (req, res, next) => {
  console.log(`Hello my middleware`);
};

// Default link
app.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

// about link page
app.get("/about", middleware, (req, res) => {
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
