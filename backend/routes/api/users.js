const userRouter = require('express').Router();
const asyncHandler = require('express-async-handler');

const { validateSignup } = require('../../middleware/validators/userValidation');
const { checkJwt } = require('../../middleware/auth.middleware');
const { User } = require('../../db/models');


userRouter.post('/signup', validateSignup, asyncHandler(async (req, res, next) => {


  const {username, email} = req.body


  User.createUser({
    username, email
  })
  .then(res => res.json({user: newUser}))
    .catch(err => res.json({errors: err}));

}));




module.exports = userRouter;