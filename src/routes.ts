import { Router } from "express";
import todoRoute from './routes/todoRoute'
const router = Router({ mergeParams: true });

router.use("/api/todos", todoRoute);

export default router;