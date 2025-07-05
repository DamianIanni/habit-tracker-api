import { Response, NextFunction } from "express";
import { RequestWithUser } from "../../types/requestWithUser";
import { ObjectSchema } from "joi";
import { SourceToValidate } from "../../types/joiTypes";

export const validateSchemaMiddleware = (
  schema: ObjectSchema,
  source: SourceToValidate
) => {
  return (req: RequestWithUser, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[source]);
    if (error) res.status(400).json({ error: error.details[0].message });
    next();
  };
};
