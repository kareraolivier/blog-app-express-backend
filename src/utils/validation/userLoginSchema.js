import Joi from "joi";

const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default userLoginSchema;
 