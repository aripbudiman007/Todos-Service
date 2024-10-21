const { Todo } = require('../models');

const getTodos = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const totalTodos = await Todo.count();
    const todos = await Todo.findAll({
      limit: limit,
      offset: offset,
    });

    const totalPages = Math.ceil(totalTodos / limit);

    res.status(200).json({
      code: 200,
      status: "OK",
      data: {
        todos: todos,
        meta: {
          totalTodos: totalTodos,
          totalPages: totalPages,
          currentPage: page,
          limit: limit
        }
      }
    });
  } catch (error) {
    next(error)
  }
};

const getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params

    const todo = await Todo.findByPk(id);

    if(!todo) {
      throw {name: "DATA_NOT_FOUND"}
    }

    res.status(200).json(
      {
        "code": 200,
        "status": "OK",
        "data": todo
      }
    )
  } catch (error) {
    next(error)
  }
}

const createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body

    const todo = await Todo.create(
      {
        title,
        description,
      }
    )

    res.status(201).json(
      {
        "code": 201,
        "status": "CREATED",
        "data": todo
      }
    )
  } catch (error) {
    next(error)
  }
}

const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params
    const { title, description } = req.body

    const todo = await Todo.findByPk(id)

    if(!todo) {
      throw {name: "DATA_NOT_FOUND"}
    }

    await Todo.update(
      {
        title,
        description,
      },{
        where: {
          id
        }
      }
    )


    res.status(201).json(
      {
        "code": 201,
        "status": "UPDATED",
        "data": todo
      }
    )

  } catch (error) {
    next(error)
  }
}

const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params

    const todo = await Todo.findByPk(id)

    if(!todo) {
      throw {name: "DATA_NOT_FOUND"}
    }

    await todo.destroy();

    res.status(204).json(
      {
        "code": 204,
        "status": "DELETED",
        "data": todo
      }
    )
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
}