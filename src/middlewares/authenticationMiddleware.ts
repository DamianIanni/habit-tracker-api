/* eslint-disable prettier/prettier */
import { Response, NextFunction } from "express";
import { MyJwtPayload } from "../types/authTypes";
import jwt from "jsonwebtoken";
import { RequestWithUser } from "../types/requestWithUser";
// import "../types/express/index";

export async function authenticationMiddleware(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Access denied" });
    return;
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as MyJwtPayload;
  console.log("TOKEN", decoded);

  req.user = decoded; // ahora está tipado gracias a la extensión
  next();
}
