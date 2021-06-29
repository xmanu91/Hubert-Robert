const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/auth", (req, res) => {
  const password = req.query.password;
  if (password == "azerty") {
    res.send("connecté");
  } else {
    res.redirect("/");
  }
});

app.listen(process.env.port || 3000);
