import { Router } from "express";
import habitRouter from "./habits";
import userRouter from "./user";
// import habit_logsRouter from "./habitsLogs";
import habit_logsRouter from "./habitsLogs";

const router = Router();

router.use("/habit", habitRouter);
router.use("/user", userRouter);
router.use("/habit/:habit_id/logs", habit_logsRouter);

export default router;
