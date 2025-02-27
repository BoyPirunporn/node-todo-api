import express from "express";
import swaggerDocs from "./swagger";
import allRoute from './routes'
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/", allRoute)
app.listen(2222, () => {
    console.log(`TODO App listening on port ${2222}`);
    swaggerDocs(app, 2222)
});