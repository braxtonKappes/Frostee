const { validationResult } = require('express-validator');

const validationErrorHandler = (req, res, next) => {

  const validationErrors = validationResult(req.body);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array().map(e => `${e.msg}`);

    const err = Error('Validation Error');
    err.errors = errors;
    err.status = 400;
    err.title = 'Validation Error';
    next(err);
  }

}

module.exports = validationErrorHandler;