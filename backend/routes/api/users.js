const userRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const { checkJwt } = require('../../middleware/auth.middleware');

const { User } = require('../../db/models');


userRouter.post('/signup', asyncHandler(async (req, res, next) => {

  const newUser = await User.createUser(req.body)

  return newUser.json()

}));




module.exports = userRouter;