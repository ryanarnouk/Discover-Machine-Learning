import Joi from 'joi';

const schema = Joi.object().keys({
  name: Joi.string().required(),
  section: Joi.string(),
  number: Joi.number().integer().required(),
  description: Joi.string().required(),
  codeblocks: Joi.string()
});

function ValidateJSON(challenge) {
  return Joi.validate(challenge, schema, (err, value) => {
    console.log(err);
  });
};

export default ValidateJSON;