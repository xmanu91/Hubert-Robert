const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(require('body-parser').json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("auth");
});

app.get("/auth", (req, res) => {
  const password = req.query.password;
  if (password == "azerty") {
    res.redirect(`/home?password=${password}`)
  } else {
    res.redirect("/");
  }
});

app.get("/home", (req, res) => {
  if(req.query.password == "azerty"){
    res.render("index")
  }else{
    res.redirect("/")
  }
})

app.listen(process.env.port || 3000);
