const express = require("express");
const port = 8000;

// mongoose and schema
const db = require("./config/mongoose");
const Todos = require("./models/todo");

const app = express();

// view engine configuration
app.set("view engine", "ejs");
app.set("views", "./views");

// body parser configuration
app.use(express.urlencoded({ extended: true }));

// static files configuration
app.use(express.static("./assets"));

// routes configuration
app.use("/",require("./routes"));


app.listen(port, function (err) {
  if (err) {
    console.log(`Error : ${err}`);
  }
  console.log(`Server is running on port ${port}`);
});
