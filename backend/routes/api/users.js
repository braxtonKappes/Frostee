const userRouter = require('express').Router();
const asyncHandler = require('express-async-handler');

const { validateSignup } = require('../../middleware/validators/userValidation');
const { checkJwt } = require('../../middleware/auth.middleware');
const { User } = require('../../db/models');


userRouter.get('/', asyncHandler(async (req, res, next) => {

  const users = await User.findAll();

  console.log(users)

  res.json(users);

}));


userRouter.post('/signup', asyncHandler(async (req, res, next) => {


  const {username, email} = req.body


  return User.createUser({
    username, email
  })
  .then(res => res.json({user: newUser}))
    .catch(err => res.json({errors: err}));

}));




module.exports = userRouter;