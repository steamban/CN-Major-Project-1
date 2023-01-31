const Todos = require("../models/todo");

var todoList = [];

module.exports.getTodos = function (req, res, next) {
  Todos.find({}, function (err, todoList) {
    if (err) {
      console.log("Error in fetching Todos!!");
      return;
    }

    return res.render("index", {
      // values passed to view home.ejs
      title: "Todo List",
      todo_list: todoList,
    });
  });
};

module.exports.addTodo = function (req, res, next) {
  console.log(req.body);
  Todos.create(
    {
      description: req.body.description,
      tag: req.body.tag,
      duedate: req.body.duedate,
    },
    function (err, newTodo) {
      if (err) {
        console.log(`Error creating new Todo : ${err}`);
        console.log(newTodo);
        return;
      }
      console.log("Added " + newTodo);
      return res.redirect("back");
    }
  );
};

module.exports.deleteTodo = function (req, res, next) {
  console.log(req.query);
  var ids = req.query;

  var count = Object.keys(ids).length;

  for (var i = 0; i < count; i++) {
    Todos.findByIdAndDelete(Object.keys(ids)[i], function (err) {
      if (err) {
        console.log(`Error deleting Todo : ${err}`);
      }
    });
  }
  return res.redirect("back");
};
