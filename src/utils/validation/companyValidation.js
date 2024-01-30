import Joi from "joi";

const companyInfoSchema = Joi.object({
  name: Joi.string().max(255).required(),
  logo: Joi.string().max(255).required(),
  telephone1: Joi.string().max(20).required(),
  telephone2: Joi.string().max(20).required(),
  email: Joi.string().email().max(255).required(),
  location: Joi.string().max(255).required(),
});
 
export default companyInfoSchema;
