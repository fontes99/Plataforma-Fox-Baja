const joi = require('@hapi/joi');

const validateRegister = (data) => {

    const schema = joi.object({

        username: joi.string()
            .min(4)
            .required(),

        email: joi.string()
            .min(6)
            .required()
            .email(),

        password: joi.string()
            .min(6)
            .required()
    });

    return schema.validate(data);
}

module.exports.validateRegister = validateRegister;