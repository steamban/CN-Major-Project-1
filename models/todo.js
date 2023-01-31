const mongoose = require("mongoose");

// schema
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  duedate: {
    type: String,
    required: true,
  },
});

// collection
const Todos = mongoose.model("Todos", todoSchema);

module.exports = Todos;