import { Router, Request, Response } from "express";
import {
  updateUserController,
  deleteUserController,
} from "../../controllers/users";

const userRouter = Router();

//Modify user
userRouter.patch("/:id", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const updatedFields: { name?: string; email?: string; password?: string } =
    {};
  if (name !== undefined) updatedFields.name = name;
  if (email !== undefined) updatedFields.email = name;
  if (password !== undefined) updatedFields.password = name;

  // console.log("ID DE EPERON", req.params.id);
  const id = Number(req.params.id);

  const result = await updateUserController(id, updatedFields);
  res.json(result);
});

//Delete user
userRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params);
  const result = await deleteUserController(id);
  res.json(result);
});

export default userRouter;
