import { Application } from "express";
import todoRoute from "./todo/todoRoute";
import { serve, setup } from "swagger-ui-express";

export default class Routes {
    constructor(app: Application) {
        app.use("/api/todo", serve, setup());
    }
}