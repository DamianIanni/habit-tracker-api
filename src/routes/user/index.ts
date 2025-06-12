import { Router, Request, Response } from "express";
// import { UserInputType } from "../../types/userType";
import {
  // insertUserController,
  updateUserController,
  // getUserController,
  deleteUserController,
} from "../../controllers/users";

const userRouter = Router();

// //Create user
// userRouter.post("/", async (req: Request, res: Response) => {
//   const { name, email, password } = req.body;
//   const user: UserInputType = {
//     name: name,
//     email: email,
//     password: password,
//   };
//   const result = await insertUserController(user);
//   res.json(result);
// });

//Modify user
userRouter.patch("/:id", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const updatedFields = {
    name: name,
    email: email,
    password: password,
  };
  const id = Number(req.params);
  const result = await updateUserController(id, updatedFields);
  res.json(result);
});

//Get user
// userRouter.get("/:id", async (req: Request, res: Response) => {
//   const id = Number(req.params);
//   const result = await getUserController(id);
//   res.json(result);
// });

//Delete user
userRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params);
  const result = await deleteUserController(id);
  res.json(result);
});

export default userRouter;
