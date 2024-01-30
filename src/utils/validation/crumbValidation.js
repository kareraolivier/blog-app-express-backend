import Joi from "joi";

const breadcrumbsSchema = Joi.object({
  pageTitle: Joi.string().max(255).required(),
  title: Joi.string().max(255).required(),
  subtitle: Joi.string().max(255).required(),
  coverImage: Joi.string().max(255).required(),
});

export default breadcrumbsSchema;
 