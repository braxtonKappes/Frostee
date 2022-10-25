const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { auth } = require('express-openid-connect');

const notFoundHandler = require('./middleware/notFoundHandler.middleware');
const errorHandler = require('./middleware/errorHandler.middleware');

// Load env variables 
require('dotenv').config();


const app = express();

const corsOptions =  {
  origin: 'http://localhost:3000'
};

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN
}

// Enable cors
app.use(cors(corsOptions));

// Parse json by default
app.use(bodyParser.json());

// Configure app to use Auth0 with express-openid
app.use(auth(config));

// Helmet is useful for security related settings
app.use(
  helmet.crossOriginResourcePolicy({ 
    policy: "cross-origin" 
  })
);






// Default app routine for every request / response
app.use((req, res, next) => {
  res.contentType("application/json; charset=utf-8");
  next();
});


// Global routes
app.use(routes);






// Error handling middleware 
app.use(notFoundHandler);
app.use(errorHandler);


module.exports = app;