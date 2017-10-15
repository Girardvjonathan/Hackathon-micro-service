const Router = require('express').Router;
const router = new Router();

const cart = require('./model/cart/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to shopping-cart API!' });
});

router.use('/cart', cart);

module.exports = router;
