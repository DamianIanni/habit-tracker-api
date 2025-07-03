import { Router } from "express";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";
import habitRouter from "./habits";
import userRouter from "./user";
import habit_logsRouter from "./habitsLogs";
import authRouter from "./auth";
import viewQueriesRouter from "./randomStats";

const router = Router();

router.use("/auth", authRouter);
router.use(authenticationMiddleware);
router.use("/habit", habitRouter);
router.use("/user", userRouter);
router.use("/habit/:habit_id/logs", habit_logsRouter);
router.use("/stats/habits", viewQueriesRouter);

export default router;
