const Todo = require("../models/toDoModel");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the request parameters
    const { title, description } = req.body; // Get the updated title and description from the request body

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, updatedAt: Date.now() },
      { new: true, runValidators: true } // Return the updated document and run validators
    );

    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo item not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedTodo,
      message: "Todo item successfully updated",
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
