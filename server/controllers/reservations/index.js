const { Router } = require('express');
const { isAuthenticated } = require('../../middlewares/auth');

const router = Router();
const ctrl = require('./reservations.ctrl');

router
  .use(isAuthenticated)
  .post('/', ctrl.postReserv)
  .get('/:userId', ctrl.getUserReserv)
  .get('/:roomId', ctrl.getRoomReserv)
  .delete('/:reservationId', ctrl.delReserv);

module.exports = router;
