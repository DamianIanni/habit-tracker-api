/* eslint-disable prettier/prettier */
import { Router, Response } from "express";
import { RequestWithUser } from "../../types/requestWithUser";
import {
  insertHabitLogsController,
  getHabitLogsController,
  updateHabitLogsControllers,
  deleteHabitLogsController,
} from "../../controllers/habitsLogs";
import { HabitLogsType } from "../../types/habitLogsTypes";

export const habit_logsRouter = Router({ mergeParams: true });

//Get habit logs
/**
 * @swagger
 * /habit/{habit_id}/logs:
 *   get:
 *     summary: Get all logs for a specific habit
 *     tags: [Habit Logs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: habit_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the habit
 *     responses:
 *       200:
 *         description: List of habit logs
 *       401:
 *         description: Unauthorized
 */
habit_logsRouter.get("/", async (req: RequestWithUser, res: Response) => {
  const { habit_id } = req.params;
  const result = await getHabitLogsController(Number(habit_id));
  res.json(result);
});

//Create habit log
/**
 * @swagger
 * /habit/{habit_id}/logs:
 *   post:
 *     summary: Create a new habit log
 *     tags: [Habit Logs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: habit_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the habit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - is_completed
 *               - log_date
 *             properties:
 *               is_completed:
 *                 type: boolean
 *               log_date:
 *                 type: string
 *                 format: date
 *                 example: "2025-06-30"
 *     responses:
 *       201:
 *         description: Habit log created
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
habit_logsRouter.post("/", async (req: RequestWithUser, res: Response) => {
  const { habit_id } = req.params;
  const { is_completed, log_date } = req.body;
  const habitLogs: HabitLogsType = {
    habit_id: Number(habit_id),
    is_completed: is_completed,
    log_date: log_date,
  };
  const result = await insertHabitLogsController(habitLogs);
  res.json(result);
});

//Update habit log
/**
 * @swagger
 * /habit/{habit_id}/logs/{id}:
 *   patch:
 *     summary: Update a habit log
 *     tags: [Habit Logs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: habit_id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the habit log
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - is_completed
 *             properties:
 *               is_completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Habit log updated
 *       404:
 *         description: Log not found
 *       401:
 *         description: Unauthorized
 */
habit_logsRouter.patch("/:id", async (req: RequestWithUser, res: Response) => {
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
/**
 * @swagger
 * /habit/{habit_id}/logs/{id}:
 *   delete:
 *     summary: Delete a habit log
 *     tags: [Habit Logs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: habit_id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the habit log
 *     responses:
 *       200:
 *         description: Habit log deleted
 *       404:
 *         description: Log not found
 *       401:
 *         description: Unauthorized
 */
habit_logsRouter.delete("/:id", async (req: RequestWithUser, res: Response) => {
  const { habit_id, id } = req.params;
  const result = await deleteHabitLogsController(Number(habit_id), Number(id));
  res.json(result);
});

export default habit_logsRouter;
