/* eslint-disable prettier/prettier */
import { comparePasswords } from "../../utils/passwordCheck";
import { Request, Response, NextFunction } from "express";

export async function passwordCheckingMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("PASSWORDS", req.body);

  const plainPassword = req.body.password;
  const hashedPassword = req.body.user[0].password_hash;

  const isValid = await comparePasswords(plainPassword, hashedPassword);

  if (!isValid) {
    res.status(401).json({ error: "Invalid password" });
    return;
  }
  //   req.body.
  next();
}
