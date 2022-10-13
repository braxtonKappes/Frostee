function notFoundHandler(req, res, next) {

  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;

  next(err);
}

module.exports = notFoundHandler;