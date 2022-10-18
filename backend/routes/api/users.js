const userRouter = require('express').Router();
const asyncHandler = require('express-async-handler');

const { validateSignup } = require('../../middleware/validators/userValidation');
const { checkJwt } = require('../../middleware/auth.middleware');
const { User } = require('../../db/models');


// serving as test route for now
userRouter.get('/', asyncHandler(async (req, res, next) => {

  const users = await User.findAll();

  console.log(users)

  res.json(users);

}));


userRouter.post('/signup', asyncHandler(async (req, res, next) => {


  const {username, email} = req.body

  console.log(req.body)

  console.log(`Hello ${username} - ${email}`)

  const newUser = await User.createUser({username, email, ...req.body});
  
  res.json(newUser);

}));


userRouter.put('/', checkJwt, asyncHandler(async (req, res, next) => {

  // add validation


  const updatedUser = await User.updateUser({...req.body});
  
  res.json(updatedUser);

}));



module.exports = userRouter;