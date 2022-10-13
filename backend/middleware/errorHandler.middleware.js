const { ValidationError } = require('sequelize');

function errorHandler(err, req, res, next) {

  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }

  if (err && err?.status === 401 && err?.code === 'credentials_required') {
    err.errors = ['You must be logged in to perform this action.'];
    err.title = 'Requires authentication';
  }
  else if (err && err?.status === 401) {
    err.errors = ['Provided credentials are invalid.'];
    err.title = 'Invalid credentials';
  }



  res.status(err.status || 500);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
  });

}

module.exports = errorHandler;