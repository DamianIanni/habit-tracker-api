import { Router } from "express";
import habitRouter from "./habits";
import userRouter from "./user";

const router = Router();

router.use("/habit", habitRouter);
router.use("/user", userRouter);
// router.use("/habits-logs", habits_logsRouter);

export default router;
