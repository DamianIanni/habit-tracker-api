import { Router, Response } from "express";
import {
  updateUserController,
  deleteUserController,
} from "../../controllers/users";
import { RequestWithUser } from "../../types/requestWithUser";

const userRouter = Router();

//Modify user
userRouter.patch("/", async (req: RequestWithUser, res: Response) => {
  const { name, password } = req.body;
  const updatedFields: { name?: string; password?: string } = {};
  if (name !== undefined) updatedFields.name = name;
  if (password !== undefined) updatedFields.password = name;

  // console.log("ID DE EPERON", req.params.id);
  const id = req.user?.id;

  const result = await updateUserController(id, updatedFields);
  res.json(result);
});

//Delete user
userRouter.delete("/", async (req: RequestWithUser, res: Response) => {
  const id = req.user?.id;
  const result = await deleteUserController(id);
  res.json(result);
});

export default userRouter;
