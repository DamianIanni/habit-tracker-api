/* eslint-disable prettier/prettier */
import { Router, Request, Response } from "express";
import { UserInputType } from "../../types/userType";
import { insertUserController, loginController } from "../../controllers/auth";
import { userExistMiddleware } from "../../middlewares/loginMiddlewares/userExistsMiddleware";
import { passwordCheckingMiddleware } from "../../middlewares/loginMiddlewares/passwordCheckingMiddleware";

const authRouter = Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */

//Create user
authRouter.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user: UserInputType = {
    name: name,
    email: email,
    password: password,
  };
  const result = await insertUserController(user);
  res.status(201).json(result);
});

//Login
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in a user and get a JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful, returns a JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
 *       401:
 *         description: Invalid email or password
 *       400:
 *         description: Missing email or password
 */
authRouter.post(
  "/login",
  userExistMiddleware,
  passwordCheckingMiddleware,
  loginController
);

export default authRouter;
