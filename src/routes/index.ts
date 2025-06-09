import { Router, Request, Response } from "express";
import habitRouter from "./habits";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.json({ message: "API is Healthy" });
});

router.use("/habits", habitRouter);
// router.use("/users", usersRouter);
// router.use("/habits-logs", habits_logsRouter);

export default router;
