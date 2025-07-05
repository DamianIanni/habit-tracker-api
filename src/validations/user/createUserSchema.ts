import Joi from "joi";
import { ObjectSchema } from "joi";

const regEx = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{8,}$"
);

export const createUserSchema: ObjectSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(regEx).required(),
}).min(3);
