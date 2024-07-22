const Todo = require("../models/toDoModel");

exports.getSingleTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Todo.findById({ _id: id });
    res.status(200).json({
      success: true,
      data: response,
      message: "Single get todo function succesfully excuted",
    });
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "No Data found with given id ",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Not Successfully excuted",
      message: "Internal Server Error",
    });
  }
};
