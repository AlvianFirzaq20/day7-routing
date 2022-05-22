const express = require("express");

const app = express();
const PORT = 90;

// const isLogin = true;

app.set("view engine", "hbs"); //setup template engine / view engine

app.use("/public", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/add-project", (req, res) => {
  res.render("addproject");
});

app.post("/contact", (req, res) => {
  const data = req.body;
  console.log(data);

  res.redirect("/contact");
});

app.post("/add-project", (req, res) => {
  const data = req.body;
  console.log(data);

  res.redirect("/addproject");
});