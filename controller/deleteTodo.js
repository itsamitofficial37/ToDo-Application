const Todo = require("../models/toDoModel");

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete({ _id: id });

    if (!deletedTodo) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }

    res.status(200).json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (err) {
    console.error(err);
  }
};
