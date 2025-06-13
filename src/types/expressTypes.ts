/* eslint-disable @typescript-eslint/no-namespace */
import { MyJwtPayload } from "./authTypes";

declare global {
  namespace Express {
    interface Request {
      user?: MyJwtPayload;
    }
  }
}

export {};
