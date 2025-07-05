import Joi from "joi";
import { ObjectSchema } from "joi";

export const habitIdInParamsSchema: ObjectSchema = Joi.object({
  habit_id: Joi.number().min(1).required(),
});
