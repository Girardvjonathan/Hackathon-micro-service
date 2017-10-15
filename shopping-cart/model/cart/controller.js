const Controller = require('../../lib/controller');
const cartFacade = require('./facade');

class CartController extends Controller {}

module.exports = new CartController(cartFacade);
