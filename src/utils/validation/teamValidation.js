import Joi from 'joi';

const teamSchema = Joi.object({
  memberType: Joi.string().valid('Core', 'Others').required(),
  name: Joi.string().max(255).required(),
  role: Joi.string().max(255).required(),
  bio: Joi.string().required(),
  profile: Joi.string().max(255).required()
});
 
export default teamSchema;