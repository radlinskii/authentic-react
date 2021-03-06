import express from 'express';
import todoController from '../controllers/todoController';

const todoRouter = express.Router();

todoRouter.use(todoController.middleware);

todoRouter.route('/')
  .get(todoController.getTodos);

todoRouter.route('/:id')
  .get(todoController.getTodoById);

todoRouter.route('/delete/:id')
  .get(todoController.deleteTodoById);

todoRouter.route('/edit/:id')
  .post(todoController.editTodoById);

todoRouter.route('/add')
  .post(todoController.postTodo);

module.exports = todoRouter;
