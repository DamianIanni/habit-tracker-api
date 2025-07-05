import Joi from "joi";
import { ObjectSchema } from "joi";

export const loginUserSchema: ObjectSchema = Joi.object({
  name: Joi.string().min(3).required(),
  password: Joi.string().required(),
}).min(2);
