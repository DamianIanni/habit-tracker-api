/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

export function errorGeneralHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  logger.error(`${req.method} ${req.url} - ${err.message}`);
  console.log("Error:", err.stack);
  console.log("Request:", req);
  res.status(500).json({ error: "something went wrog", message: err.message });
}
