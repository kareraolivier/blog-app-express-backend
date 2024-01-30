import Joi from "joi";
 
const blogValidationSchema = Joi.object({
  title: Joi.string().max(255).required(),
  description: Joi.string().max(255).required(),
  image: Joi.string().max(255).required(),
  authorName: Joi.string().max(255).required(),
  authorDate: Joi.string().max(255).required(),
});

export default blogValidationSchema;
