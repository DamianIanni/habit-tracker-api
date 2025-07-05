import Joi from "joi";
import { ObjectSchema } from "joi";

const regEx = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{8,}$"
);

export const updateUserSchema: ObjectSchema = Joi.object({
  name: Joi.string().min(3),
  password: Joi.string().pattern(regEx),
}).min(1);
