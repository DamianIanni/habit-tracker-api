import Joi from "joi";
import { ObjectSchema } from "joi";

export const idInParamsSchema: ObjectSchema = Joi.object({
  id: Joi.number().min(1).required(),
});
