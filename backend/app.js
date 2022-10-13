const express = require('express');
const routes = require('./routes');
const notFoundHandler = require('./middleware/notFoundHandler.middleware');
const errorHandler = require('./middleware/errorHandler.middleware');

const app = express();


app.use((req, res, next) => {
  res.contentType("application/json; charset=utf-8");
  next();
});


app.use(routes);






// Error handling middleware 
app.use(notFoundHandler);
app.use(errorHandler);


module.exports = app;