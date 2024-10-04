import express from "express";
import Routes from "./routes";
import { serve, setup } from 'swagger-ui-express';

export default class TodoApp {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config()
    }

    public listen(port: number) {
        this.app.listen(port, () => {
            console.log(`TODO App listening on port ${port}`);
        });
    }

    public config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded());
        this.app.use(express.static('public'));
        this.app.use("/docs", serve, setup(undefined));
        new Routes(this.app);

    }
}

const todoApp = new TodoApp();
todoApp.listen(2222);