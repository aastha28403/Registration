const express = require("express");
const app = express();
const path = require("path");
const pug = require("pug");
require("./db/conn.js");
const register = require("../src/db/registers");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index.pug");
});

app.post("/", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    if (password === cpassword) {
      const registration = new register({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        number: req.body.number,
        username: req.body.username,
        password: password,
        cpassword: cpassword,
      });

      const registered = await registration.save();
      res.status(201).render("login.pug");
    } else {
      res.send("password is not matching.");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const username = req.body.lusername;
    const password = req.body.lpassword;

    const user = await register.findOne({ username: username });

    if (user.password === password) {
      res.status(201).render("index");
    } else {
      res.send("incorrect password");
    }
  } catch (error) {
    res.status(400).send("invaild username");
  }
});

// validation

// validation

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
