import { Router } from "express";
import habitRouter from "./habits";
import userRouter from "./user";
import habit_logsRouter from "./habitsLogs";
import authRouter from "./auth";

const router = Router();

router.use("/habit", habitRouter);
router.use("/user", userRouter);
router.use("/habit/:habit_id/logs", habit_logsRouter);
router.use("/auth", authRouter);

export default router;
