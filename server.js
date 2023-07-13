var express = require("express");
var app = express();
const path = require("path");
const THREE = require("three");
var http = require("http");
var bodyParser = require("body-parser");

app.set("port", process.env.PORT || 3000);
var server = http.createServer(app);
app.use(express.static(path.join(__dirname, "./front")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./front", "index.html"))
);

server.listen(process.env.PORT || 3000);
