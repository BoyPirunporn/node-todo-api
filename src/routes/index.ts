import { Application } from "express";
import todoRoute from "./todo/todoRoute";

export default class Routes {
    constructor(app: Application) {
        app.use("/api/todo", todoRoute);
    }
}