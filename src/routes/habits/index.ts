/* eslint-disable prettier/prettier */
import { Router, Response } from "express";
import { RequestWithUser } from "../../types/requestWithUser";
import {
  getAllHabitsController,
  getHabitController,
  deleteHabitController,
  updateHabitController,
} from "../../controllers/habits";
import { habitType } from "../../types/responseTypes";
import { insertHabit } from "../../services/habits/insertHabit";

const habitRouter = Router({ mergeParams: true });

//Get all habits
habitRouter.get("/all-habits", async (req: RequestWithUser, res: Response) => {
  const user_id = req.user?.id;
  const result = await getAllHabitsController(Number(user_id));
  res.json(result);
});

//get habit
habitRouter.get("/:id", async (req: RequestWithUser, res: Response) => {
  const { id } = req.params;
  const user_id = req.user?.id;
  console.log("REQ REQ", user_id);

  const result = await getHabitController(Number(id), user_id);
  res.json(result);
});

//update habit
habitRouter.patch("/:id", async (req: RequestWithUser, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const user_id = req.user?.id;
  const updatedHabit: Partial<habitType> = {};
  if (name !== undefined) updatedHabit.name = name;
  if (description !== undefined) updatedHabit.description = description;
  const result = await updateHabitController(updatedHabit, Number(id), user_id);
  res.json(result);
});

//create habit
habitRouter.post("/", async (req: RequestWithUser, res: Response) => {
  console.log("REQ HEADERS", req.headers.authorization);
  const { name, description } = req.body;
  const user_id = req.user?.id;
  const habit: habitType = {
    user_id: user_id,
    name: name,
    description: description,
  };
  const result = await insertHabit(habit);
  res.json(result);
});

//delete habit
habitRouter.delete("/:id", async (req: RequestWithUser, res: Response) => {
  const user_id = req.user?.id;
  const id = Number(req.params.id);
  const result = await deleteHabitController(id, user_id);
  res.json(result);
});

export default habitRouter;
