import { Router } from "express";
import TodoController from '../../controllers/todoController';
class TodoRoutes {
    routes: Router;
    controller: TodoController;
    constructor() {
        this.routes = Router();
        this.controller = new TodoController();

        this.init();
    }

    private init() {
        this.routes.get("/", this.controller.getTodos.bind(this.controller));
        this.routes.get("/:id", this.controller.getTodoById.bind(this.controller));
        this.routes.post("/add-todo", this.controller.addTodo.bind(this.controller));
        this.routes.patch("/update-todo/:id", this.controller.updateTodo.bind(this.controller));
        this.routes.delete("/delete-todo/:id", this.controller.deleteTodo.bind(this.controller));
    }
}

export default new TodoRoutes().routes;