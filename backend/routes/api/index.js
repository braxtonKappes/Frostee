const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { checkJwt } = require('../../middleware/auth.middleware');
const { Game, Category } = require('../../db/models');

const userRouter = require('./users')

router.use('/users', userRouter);
// api routers

router.get('/', asyncHandler(async (req, res, next) => {



}));


// will require authentication to access any routes after
router.use(checkJwt);

router.get('/protected', asyncHandler(async (req, res, next) => {

  

}));

module.exports = router;