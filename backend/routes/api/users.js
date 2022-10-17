const userRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const { checkJwt } = require('../../middleware/auth.middleware');

const { User } = require('../../db/models');


userRouter.post('/signup', asyncHandler(async (req, res, next) => {


  const {username, email} = req.body

  const newUser = await User.createUser({username, email})

  return res.json({user: newUser})

}));




module.exports = userRouter;