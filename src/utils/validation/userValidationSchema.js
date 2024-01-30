import Joi from "joi";

const userRegisterSchema = Joi.object({
  names: Joi.string().required(),
  username: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default userRegisterSchema;
 