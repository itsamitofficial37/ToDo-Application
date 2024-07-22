// import krte hai model ko

const Todo = require("../models/toDoModel");

exports.getTodo = async (req, res) => {
  try {
    const response = await Todo.find();
    res.status(200);
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
