import { Router, Response } from "express";
import { RequestWithUser } from "../../types/requestWithUser";
import {
  longerStreakByHabitController,
  activeStreakByHabitController,
  completonPercentage15daysController,
  completonPercentage30daysController,
  userWith3HabitsController,
} from "../../controllers/randomStats";

const viewQueriesRouter = Router();

/**
 * @swagger
 * /stats/habits/completion-percentage-15days:
 *   get:
 *     summary: Get habit completion percentage for last 15 days
 *     tags: [Stats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Percentage of logs completed per habit in the last 15 days
 */
viewQueriesRouter.get(
  "/completion-percentage-15days",
  async (req: RequestWithUser, res: Response) => {
    const user_id: number = req.user?.id;
    const response = await completonPercentage15daysController(user_id);
    res.json(response);
  }
);

/**
 * @swagger
 * /stats/habits/completion-percentage-30days:
 *   get:
 *     summary: Get habit completion percentage for last 30 days
 *     tags: [Stats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Percentage of logs completed per habit in the last 30 days
 */
viewQueriesRouter.get(
  "/completion-percentage-30days",
  async (req: RequestWithUser, res: Response) => {
    const user_id: number = req.user?.id;
    const response = await completonPercentage30daysController(user_id);
    res.json(response);
  }
);

/**
 * @swagger
 * /stats/habits/user-with-3-habits:
 *   get:
 *     summary: Get users with at least 3 habits and enough logs
 *     tags: [Stats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns users with 3+ habits and at least one habit with 5+ completions
 */
viewQueriesRouter.get(
  "/user-with-3-habits",
  async (req: RequestWithUser, res: Response) => {
    const user_id: number = req.user?.id;
    const response = await userWith3HabitsController(user_id);
    res.json(response);
  }
);

/**
 * @swagger
 * /stats/habits/active-streak-by-habit:
 *   get:
 *     summary: Get current active streaks per habit
 *     tags: [Stats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Active (ongoing) streaks by habit ending on today
 */
viewQueriesRouter.get(
  "/active-streak-by-habit",
  async (req: RequestWithUser, res: Response) => {
    const user_id: number = req.user?.id;
    const response = await activeStreakByHabitController(user_id);
    res.json(response);
  }
);

/**
 * @swagger
 * /stats/habits/longer-streak-by-habit:
 *   get:
 *     summary: Get longest streak ever achieved per habit
 *     tags: [Stats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Longest streaks (historical max) per habit
 */
viewQueriesRouter.get(
  "/longer-streak-by-habit",
  async (req: RequestWithUser, res: Response) => {
    const user_id: number = req.user?.id;
    const response = await longerStreakByHabitController(user_id);
    res.json(response);
  }
);

export default viewQueriesRouter;
