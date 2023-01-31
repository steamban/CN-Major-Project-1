const express = require("express");

// route handler
const router = express.Router();
const todoController = require('../controller/todo_controller');

// gets homepage
router.get('/', todoController.getTodos);

// adds a todo
router.post('/add_todo', todoController.addTodo);

// deletes a todo
router.get('/delete_todo', todoController.deleteTodo);

module.exports = router;