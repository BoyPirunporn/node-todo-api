import { TodoModel } from "../models/todo.model";
import { ITodo } from "../typing";
import { Request, Response } from "express";
import _ from 'lodash';
import Utils from "../utils";



let todos: ITodo[] = [];
async function getTodos(req: Request, res: Response): Promise<void> {
    try {
        res.json({
            statusCode: 200,
            todo: todos
        });
    } catch (error) {
        res.json(Utils.report(error))
    }
    return;
}

async function getTodoById(req: Request<{ id: string }>, res: Response): Promise<void> {
    try {
        const todo = todos.find(todo => todo.id === req.params.id);
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

async function addTodo(req: Request<{}, {}, Omit<ITodo, 'id'>>, res: Response): Promise<void> {
    try {
        todos.push({ id: Utils.generateId(), text: req.body.text });
        res.json({
            statusCode: 201,
            message: "Todo create successfully!"
        });
    } catch (error) {
        res.json(Utils.report(error))
    }
    return;
}

async function updateTodo(req: Request<{ id: string }, {}, Omit<ITodo,'id'>>, res: Response): Promise<void> {
    try {
        const todoId = req.params.id;
        const todoIndex = todos.findIndex(t => t.id === todoId);


        if (todoIndex < 0) {
            res.json({
                statusCode: 400,
                message: "Could not find todo!"
            });
            return
        }

        //update todos
        todos[todoIndex] = new TodoModel(todoId, req.body.text);
        res.json({
            statusCode: 200,
            message: "Todo update successfully!"
        });
    } catch (error) {
        res.json(Utils.report(error))
    }
    return;
}

async function deleteTodo(req: Request<{ id: string }>, res: Response): Promise<void> {
    try {
        todos = todos.filter(t => t.id !== req.params.id);
        res.json({
            statusCode: 200,
            message: "Todo delete successfylly"
        });
    } catch (error) {
        res.json(Utils.report(error))
    }
    return;
}

export {
    getTodoById,
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
}