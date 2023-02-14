const https = require("https");
// const http = require("http");
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();

const options = {
  key: fs.readFileSync(path.join(__dirname, "./ssl/key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "./ssl/cert.pem")),
};

const server = https.createServer(options, app);
// const server = http.createServer(app);

app.use(cors());

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  console.log("someone came here");
  res.send("Welcome");
});

server.listen(3003, () => {
  console.log("listening on 3003");
});
