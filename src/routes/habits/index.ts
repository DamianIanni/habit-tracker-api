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

import { validateSchemaMiddleware } from "../../middlewares/schemaMiddlewares/validateSchemaMiddleware";
import { createHabitSchema, updateHabitSchema } from "../../validations/habit";
import { idInParamsSchema } from "../../validations/params";
import { SourceToValidate } from "../../types/joiTypes";

const SOUCE_BODY: SourceToValidate = "body";
const SOUCE_PARAMS: SourceToValidate = "params";

const habitRouter = Router({ mergeParams: true });

//Get all habits
/**
 * @swagger
 * /api/habit/all-habits:
 *   get:
 *     summary: Get all habits for the authenticated user
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of habits
 *       401:
 *         description: Unauthorized
 */
habitRouter.get("/all-habits", async (req: RequestWithUser, res: Response) => {
  const user_id = req.user?.id;
  const result = await getAllHabitsController(Number(user_id));
  res.json(result);
});

//get habit
/**
 * @swagger
 * /api/habit/{id}:
 *   get:
 *     summary: Get a specific habit by ID
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the habit
 *     responses:
 *       200:
 *         description: Habit found
 *       404:
 *         description: Habit not found
 *       401:
 *         description: Unauthorized
 */
habitRouter.get(
  "/:id",
  validateSchemaMiddleware(idInParamsSchema, SOUCE_PARAMS),
  async (req: RequestWithUser, res: Response) => {
    const { id } = req.params;
    const user_id = req.user?.id;

    const result = await getHabitController(Number(id), user_id);
    res.json(result);
  }
);

//update habit
/**
 * @swagger
 * /api/habit/{id}:
 *   patch:
 *     summary: Update a habit
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Habit updated successfully
 *       400:
 *         description: Invalid data
 *       401:
 *         description: Unauthorized
 */
habitRouter.patch(
  "/:id",
  validateSchemaMiddleware(idInParamsSchema, SOUCE_PARAMS),
  validateSchemaMiddleware(updateHabitSchema, SOUCE_BODY),
  async (req: RequestWithUser, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const user_id = req.user?.id;
    const updatedHabit: Partial<habitType> = {};
    if (name !== undefined) updatedHabit.name = name;
    if (description !== undefined) updatedHabit.description = description;
    const result = await updateHabitController(
      updatedHabit,
      Number(id),
      user_id
    );
    res.json(result);
  }
);

//create habit
/**
 * @swagger
 * /api/habit:
 *   post:
 *     summary: Create a new habit
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Habit created successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
habitRouter.post(
  "/",
  validateSchemaMiddleware(createHabitSchema, SOUCE_BODY),
  async (req: RequestWithUser, res: Response) => {
    const { name, description } = req.body;
    const user_id = req.user?.id;
    const habit: habitType = {
      user_id: user_id,
      name: name,
      description: description,
    };
    const result = await insertHabit(habit);
    res.json(result);
  }
);

//delete habit
/**
 * @swagger
 * /api/habit/{id}:
 *   delete:
 *     summary: Delete a habit
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Habit deleted successfully
 *       404:
 *         description: Habit not found
 *       401:
 *         description: Unauthorized
 */
habitRouter.delete(
  "/:id",
  validateSchemaMiddleware(idInParamsSchema, SOUCE_PARAMS),
  async (req: RequestWithUser, res: Response) => {
    const user_id = req.user?.id;
    const id = Number(req.params.id);
    const result = await deleteHabitController(id, user_id);
    res.json(result);
  }
);

export default habitRouter;
