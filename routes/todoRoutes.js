const express = require("express");
const { createTodo } = require("../controller/createTodo");
const { getTodo } = require("../controller/getTodo");
const { getSingleTodo } = require("../controller/getSingleTodo");
const { updateTodo } = require("../controller/updateTodo");
const { deleteTodo } = require("../controller/deleteTodo");
const router = express.Router();

router.post("/create", createTodo);
router.get("/gettodo", getTodo);
router.get("/getsingletodo/:id", getSingleTodo);
router.put("/updatetodo/:id", updateTodo);
router.delete("/deletetodo/:id", deleteTodo);

module.exports = router;
