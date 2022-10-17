const { handleValidationErrors } = require('../validationErrorHandler.middleware');
const { check } = require('express-validator');


const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 3, max: 32 })
    .withMessage('Please provide a username between 3 and 32 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
    handleValidationErrors
];


module.exports = {
  validateSignup
};