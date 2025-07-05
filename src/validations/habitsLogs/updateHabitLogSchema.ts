import Joi from "joi";
import { ObjectSchema } from "joi";

export const updateHabitLogSchema: ObjectSchema = Joi.object({
  is_completed: Joi.boolean().strict().required(),
}).min(1);
