const { Router } = require('express');
const auth = require('../../middlewares/auth');
const csrfProtection = require('../../middlewares/csrf');
const reserveCheck = require('../../middlewares/reserveCheck');
const reserveDelAuth = require('../../middlewares/reserveDelAuth');

const router = Router();
const ctrl = require('./reservations.ctrl');

router
  .use(auth.isAuthenticated)
  .get('/booker/:booker_id', ctrl.getUserReserv)
  .get('/room/:room_id', ctrl.getRoomReserv)
  .use(csrfProtection)
  .post('/', reserveCheck, ctrl.postReserv)
  .delete('/:id', reserveDelAuth, ctrl.delReserv);

module.exports = router;
