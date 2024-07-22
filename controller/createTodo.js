const Todo = require("../models/toDoModel");

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const response = await Todo.create({ title, description });

    res.status(200).json({
      success: true,
      data: response,
      message: "Data entry successfully created in the DB",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};
