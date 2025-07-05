import Joi from "joi";
import { ObjectSchema } from "joi";

export const updateHabitSchema: ObjectSchema = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().allow("").optional(),
});
