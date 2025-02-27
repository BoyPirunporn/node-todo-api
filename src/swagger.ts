import type { Express, Response, Request } from "express"
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";



const swaggerOptions: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My Express.js API',
            version: '1.0.0',
        },
    },
    apis: ['**/routes/**/*.ts','**/routes/**/*.ts'],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions)
const swaggerDocs = (app: Express, port: number) => {
    app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get("/docs.json", (_: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json")
        res.send(swaggerSpec)
    });


}

export default swaggerDocs;