import { Request, Response, NextFunction } from "express";
import { getUserHelper } from "../../services/helpers";

export async function userExistMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;
  const result = await getUserHelper(email);
  if (!result) {
    res.status(404).json({ success: false, message: "User does not exist" });
    return;
  }

  //   req.user = result[0];
  req.body.user = result;
  next();
}
