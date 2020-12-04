const express = require('express');
var path = require("path");

var PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});get("/", req, res)

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});get("/notes", req, res)