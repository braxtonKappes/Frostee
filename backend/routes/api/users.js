const userRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');

// Middleware that takes care of checking if a request
// is coming from an authenticated user
const { requiresAuth } = require('express-openid-connect');

// *** TODO validation setup, currently not working correctly as a middleware
const { validateSignup } = require('../../middleware/validators/userValidation');
// ***


userRouter.get('/', asyncHandler(async (req, res, next) => {

  const { id } = req.body;

  const users = await User.findByPk(id);

  res.json(users);

}));


userRouter.post('/', requiresAuth(), asyncHandler(async (req, res, next) => {


  const {username, email} = req.body

  const newUser = await User.createUser({username, email, ...req.body});
  
  res.json(newUser);

}));


userRouter.put('/', requiresAuth(), asyncHandler(async (req, res, next) => {


  const updatedUser = await User.updateUser({...req.body});
  
  res.json(updatedUser);

}));



module.exports = userRouter;