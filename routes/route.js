const Router = require("express").Router();

Router.route("/nilesh").get((req, res) => {
  res.send("Bhaiya ji ko pranam!");
});

module.exports = { Router };
