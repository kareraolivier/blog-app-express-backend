import Joi from "joi";

const eventValidationSchema = Joi.object({
  cover: Joi.string().max(255).required(),
  date: Joi.string().max(255).required(),
  location: Joi.string().max(255).required(),
  title: Joi.string().max(255).required(),
  button: Joi.string().max(255).required(),
  time: Joi.string().max(200).required(),
});

export default eventValidationSchema;
 