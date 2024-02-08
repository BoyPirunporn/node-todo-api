import express from "express";
import Routes from "./routes";

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

    public config():void {
        this.app.use(express.json());
        this.app.use(express.urlencoded());
        new Routes(this.app);

    }
}

const todoApp = new TodoApp();
todoApp.listen(2222);