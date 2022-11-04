const router = require('express').Router();
const asyncHandler = require('express-async-handler');


const userRouter = require('./users')

// Seperate API routes
router.use('/users', userRouter);



// Can add global API routes here if needed


module.exports = router;