const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const notFoundHandler = require('./middleware/notFoundHandler.middleware');
const errorHandler = require('./middleware/errorHandler.middleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  helmet.crossOriginResourcePolicy({ 
    policy: "cross-origin" 
  })
);







app.use((req, res, next) => {
  res.contentType("application/json; charset=utf-8");
  next();
});


app.use(routes);






// Error handling middleware 
app.use(notFoundHandler);
app.use(errorHandler);


module.exports = app;