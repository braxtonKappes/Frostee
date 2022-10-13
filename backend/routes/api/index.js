const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { checkJwt } = require('../../middleware/auth.middleware');
const { Game } = require('../../db/models');




// api routers

router.get('/', asyncHandler(async (req, res, next) => {

  const title = 'test'
  const description = '1234'
  const original_price = 20
  const genre = 'horror'
  const developer = 'EA'

  const game = await Game.create({
    title,
    description,
    original_price,
    genre,
    developer
  });

  // const game = await Game.findByPk(1);
  game.original_price = 19.99;
  game.discount = 10;

  await game.save();


  console.log(game)


  return res.json({msg: game});

}));


router.use(checkJwt);

router.get('/protected', asyncHandler(async (req, res, next) => {

  

}));

module.exports = router;