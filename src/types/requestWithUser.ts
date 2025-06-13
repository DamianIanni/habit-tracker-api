import { MyJwtPayload } from "./authTypes";
import { Request } from "express";

export interface RequestWithUser extends Request {
  user?: MyJwtPayload;
}
