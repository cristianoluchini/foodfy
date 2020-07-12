const express = require("express");
const nunjucks = require("nunjucks");
const recipes = require("./data");

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,  
  autoescape: false,
  noCache: true
});

server.get("/", function(req, res) {  
  res.render("index", {recipes});
});

server.get("/about", function(req, res) {
  res.render("about");
});

server.get("/recipes", function(req, res) {
  res.render("recipes", {recipes});
});

server.get("/recipe/:index", function(req, res) {
  const recipeIndex = req.params.index;
  const recipe = (recipes[recipeIndex]);
  res.render("recipe", {recipe});
});

server.use(function(req, res) {
  res.status(404).render("404");
});

server.listen(5000, function() {
  console.log("Server is runing!!!");
})