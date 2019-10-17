const { Router } = require('express');
const auth = require('../../middlewares/auth');
const csrfProtection = require('../../middlewares/csrf');

const router = Router();
const ctrl = require('./reservations.ctrl');

router
  .use(auth.isAuthenticated)
  .get('/booker/:booker_id', ctrl.getUserReserv)
  .get('/room/:room_id', ctrl.getRoomReserv)
  .post('/', csrfProtection, ctrl.postReserv)
  .delete('/:id', ctrl.delReserv);

module.exports = router;
