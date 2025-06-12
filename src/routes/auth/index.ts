/* eslint-disable prettier/prettier */
import { Router, Request, Response } from "express";
import { UserInputType } from "../../types/userType";
import { insertUserController, loginController } from "../../controllers/auth";
import { userExistMiddleware } from "../../middlewares/loginMiddlewares/userExistsMiddleware";
import { passwordCheckingMiddleware } from "../../middlewares/loginMiddlewares/passwordCheckingMiddleware";

const authRouter = Router();

//Create user
authRouter.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user: UserInputType = {
    name: name,
    email: email,
    password: password,
  };
  const result = await insertUserController(user);
  res.json(result);
});

//Login
authRouter.post(
  "/login",
  userExistMiddleware,
  passwordCheckingMiddleware,
  loginController
);

export default authRouter;
