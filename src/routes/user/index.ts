import { Router, Response } from "express";
import {
  updateUserController,
  deleteUserController,
} from "../../controllers/users";
import { RequestWithUser } from "../../types/requestWithUser";

import { validateSchemaMiddleware } from "../../middlewares/schemaMiddlewares/validateSchemaMiddleware";
import { updateUserSchema } from "../../validations/user";
import { SourceToValidate } from "../../types/joiTypes";

const SOURCE_BODY: SourceToValidate = "body";

const userRouter = Router();

//Modify user
/**
 * @swagger
 * /user:
 *   patch:
 *     summary: Update logged-in user's profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
userRouter.patch(
  "/",
  validateSchemaMiddleware(updateUserSchema, SOURCE_BODY),
  async (req: RequestWithUser, res: Response) => {
    const { name, password } = req.body;
    const updatedFields: { name?: string; password?: string } = {};
    if (name !== undefined) updatedFields.name = name;
    if (password !== undefined) updatedFields.password = password;

    const id = req.user?.id;

    const result = await updateUserController(id, updatedFields);
    res.json(result);
  }
);

//Delete user
/**
 * @swagger
 * /user:
 *   delete:
 *     summary: Delete logged-in user's account
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       401:
 *         description: Unauthorized
 */
userRouter.delete("/", async (req: RequestWithUser, res: Response) => {
  const id = req.user?.id;
  const result = await deleteUserController(id);
  res.json(result);
});

export default userRouter;
