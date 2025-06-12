/* eslint-disable prettier/prettier */
import { Router, Request, Response } from "express";
import {
  getAllHabitsController,
  getHabitController,
  deleteHabitController,
  updateHabitController,
} from "../../controllers/habits";
import { habitType } from "../../types/responseTypes";
import { insertHabit } from "../../services/habits/insertHabit";

const habitRouter = Router();

//Get all habits
habitRouter.get(
  "/user/:user_id/habits",
  async (req: Request, res: Response) => {
    const { user_id } = req.params;
    const result = await getAllHabitsController(Number(user_id));
    res.json(result);
  }
);

//get habit
habitRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user_id } = req.body;
  const result = await getHabitController(Number(id), Number(user_id));
  res.json(result);
});

//update habit
habitRouter.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user_id, name, description } = req.body;
  const updatedHabit: Partial<habitType> = {};
  if (name !== undefined) updatedHabit.name = name;
  if (description !== undefined) updatedHabit.description = description;
  const result = await updateHabitController(updatedHabit, Number(id), user_id);
  res.json(result);
});

//create habit
habitRouter.post("/", async (req: Request, res: Response) => {
  const { user_id, name, description } = req.body;
  const habit: habitType = {
    user_id: user_id,
    name: name,
    description: description,
  };
  const result = await insertHabit(habit);
  res.json(result);
});

//delete habit
habitRouter.delete("/:id", async (req: Request, res: Response) => {
  const { user_id } = req.body;
  const id = Number(req.params.id);
  const result = await deleteHabitController(id, user_id);
  res.json(result);
});

export default habitRouter;
