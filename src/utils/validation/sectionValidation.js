import Joi from "joi";

const sectionsSchema = Joi.object({
  type: Joi.string().max(50).required(),
  title: Joi.string().max(255).required(),
  description: Joi.string().required(),
  coverImage: Joi.string().max(255).required(),
  learnMoreButtonLink: Joi.string().allow("").max(255),
});

export default sectionsSchema;
 