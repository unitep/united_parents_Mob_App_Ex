// Server functionality

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));


// Routing to the different views
app.get("/login", function(req, res) {
  res.render("login");
});

app.get("/registration", function(req, res) {
  res.render("registration");
});

app.get("/home", function(req, res) {
  res.render("home");
});

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/my-profile", function(req, res) {
  res.render("my-profile");
});

app.get("/search-user", function(req, res) {
  res.render("search-user");
});

app.get("/chats", function(req, res) {
  res.render("chats");
});

app.get("/help-finances", function(req, res) {
  res.render("help-finances");
});

app.get("/settings", function(req, res) {
  res.render("settings");
});

app.get("/logout", function(req, res) {
  res.render("login");
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});