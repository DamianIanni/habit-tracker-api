import Joi from "joi";
import { ObjectSchema } from "joi";

export const habitId_idInParamsSchema: ObjectSchema = Joi.object({
  id: Joi.number().min(1).required(),
  habit_id: Joi.number().min(1).required(),
});
