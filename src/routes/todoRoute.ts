import { Router } from "express";
import {
    addTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo
} from '../controllers/todoController';

const routes = Router();


/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get a todo
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: An all todo item
 */
routes.get("/", getTodos);

/**
 * @swagger
 * /api/todos/{id}:
 *   get:
 *     summary: Get a todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single todo item
 */
routes.get("/:id", getTodoById);

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Add a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       201:
 *         description: Todo created successfully
 */
routes.post("/", addTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Todo updated successfully
 */
routes.put("/:id", updateTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 */
routes.delete("/:id", deleteTodo);

export default routes;
