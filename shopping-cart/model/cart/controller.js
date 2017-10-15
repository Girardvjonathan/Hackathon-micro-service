const Controller = require('../../lib/controller');
const cartFacade = require('./facade');

class CartController extends Controller {
  remove(req, res, next) {
    if(req.body.product_id){
    this.facade.remove({ user_id: req.body.user_id, product_id: req.body.product_id })
      .then((doc) => {
        if (!doc) { return res.sendStatus(404); }
        return res.sendStatus(204);
      })
      .catch(err => next(err));
    } else{
      console.log("Hi2------------------------------------------",req.body);
      this.facade.remove({ user_id: req.body.user_id})
        .then((doc) => {
          if (!doc) { return res.sendStatus(404); }
          return res.sendStatus(204);
        })
        .catch(err => next(err));
      }
}
}

module.exports = new CartController(cartFacade);
