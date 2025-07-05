import Joi from "joi";
import { ObjectSchema } from "joi";

export const createHabitLogSchema: ObjectSchema = Joi.object({
  is_completed: Joi.boolean().strict().required(),
  log_date: Joi.date().max("now").required(),
}).min(2);
