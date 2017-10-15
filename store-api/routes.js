const Router = require('express').Router;
const router = new Router();

const setting = require('./model/setting/router');
const item = require('./model/item/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to store-api API!' });
});

router.use('/setting', setting);
router.use('/item', item);

module.exports = router;
