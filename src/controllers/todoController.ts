import { TodoModel } from "../models/todo.model";
import { ITodo } from "../typing";
import { Request, Response } from "express";
import _ from 'lodash';
import Utils from "../utils";
export default class TodoController {
    todos: ITodo[];
    constructor() {
        this.todos = [];
    }

    async getTodos(req: Request, res: Response): Promise<void> {
        try {
            res.json({
                statusCode: 200,
                todo: this.todos
            });
        } catch (error) {
            res.json(Utils.report(error))
        }
        return;
    }

    async getTodoById(req: Request<{ id: string }>, res: Response): Promise<void> {
        try {
            const todo = this.todos.find(todo => todo.id === req.params.id);
            if (_.isEmpty(todo)) {
                res.json({
                    statusCode: 200,
                    todo: "Could not find todo!"
                });
                return
            }
            res.json({
                statusCode: 200,
                todo
            });
        } catch (error) {
            res.json(Utils.report(error))
        }
        return;
    }

    async addTodo(req: Request<{}, {}, Omit<ITodo, 'id'>>, res: Response): Promise<void> {
        try {
            this.todos.push(new TodoModel(Utils.generateId(), req.body.text));
            res.json({
                statusCode: 201,
                message: "Todo create successfully!"
            });
        } catch (error) {
            res.json(Utils.report(error))
        }
        return;
    }

    async updateTodo(req: Request<{ id: string }, {}, { text: string }>, res: Response): Promise<void> {
        try {
            const todoId = req.params.id;
            const todoIndex = this.todos.findIndex(t => t.id === todoId);


            if (todoIndex < 0) {
                res.json({
                    statusCode: 400,
                    message: "Could not find todo!"
                });
                return
            }

            //update todos
            this.todos[todoIndex] = new TodoModel(todoId, req.body.text);
            res.json({
                statusCode: 200,
                message: "Todo update successfully!"
            });
        } catch (error) {
            res.json(Utils.report(error))
        }
        return;
    }

    async deleteTodo(req: Request<{ id: string }>, res: Response): Promise<void> {
        try {
            this.todos = this.todos.filter(t => t.id !== req.params.id);
            res.json({
                statusCode: 200,
                message: "Todo delete successfylly"
            });
        } catch (error) {
            res.json(Utils.report(error))
        }
        return;
    }
}