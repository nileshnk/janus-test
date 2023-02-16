const Router = require("express").Router();

Router.route("/nilesh").get((req, res) => {
  res.send("Bhaiya pranam!");
});

module.exports = { Router };
