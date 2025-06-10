import { Router, Request, Response } from "express";
import {
  insertHabitLogsController,
  getHabitLogsController,
  updateHabitLogsControllers,
  deleteHabitLogsController,
} from "../../controllers/habitsLogs";
import { HabitLogsType } from "../../types/habitLogsTypes";

export const habit_logsRouter = Router({ mergeParams: true });

//Get habit logs
habit_logsRouter.get("/", async (req: Request, res: Response) => {
  const { habit_id } = req.params;
  const result = await getHabitLogsController(Number(habit_id));
  res.json(result);
});

//Create habit log
habit_logsRouter.post("/", async (req: Request, res: Response) => {
  const { habit_id } = req.params;
  const { is_completed } = req.body;
  const habitLogs: HabitLogsType = {
    habit_id: Number(habit_id),
    is_completed: is_completed,
  };
  const result = await insertHabitLogsController(habitLogs);
  res.json(result);
});

//Update habit log
habit_logsRouter.put("/:id", async (req: Request, res: Response) => {
  const { habit_id, id } = req.params;
  const { is_completed } = req.body;
  const result = await updateHabitLogsControllers(
    Number(habit_id),
    Number(id),
    is_completed
  );
  res.json(result);
});

//Delete habit log
habit_logsRouter.delete("/:id", async (req: Request, res: Response) => {
  const { habit_id, id } = req.params;
  const result = await deleteHabitLogsController(Number(habit_id), Number(id));
  res.json(result);
});

export default habit_logsRouter;
