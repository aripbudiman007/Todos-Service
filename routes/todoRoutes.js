const { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require('../controllers/TodoController');

const router = require('express').Router();

router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;