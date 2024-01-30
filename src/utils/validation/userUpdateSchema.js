import Joi from "joi";

const updateUserSchema = Joi.object({
  names: Joi.string().min(2),
  username: Joi.string().min(2),
  email: Joi.string().email(),
});

export default updateUserSchema;
 