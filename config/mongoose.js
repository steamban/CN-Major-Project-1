const mongoose = require("mongoose");

// connect to db
mongoose.connect("mongodb://127.0.0.1/todo_list_db");

// get connection
const db = mongoose.connection;

// error handling
db.on("error", console.error.bind(console, "error connecting to database!!"));

// when connected
db.once("open", () => {
  console.log("Successfully connected to database!!");
});
