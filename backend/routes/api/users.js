const userRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const { checkJwt } = require('../../middleware/auth.middleware');

const { User } = require('../../db/models');

// const parseJson = bodyParser.json();

userRouter.post('/signup', asyncHandler(async (req, res, next) => {

  console.log("asssssssssssss")
  console.log(req.body)

  const {username, email} = req.body

  // console.log(username, email)

  const newUser = await User.createUser({username, email})

  return res.json({user: newUser})

}));




module.exports = userRouter;