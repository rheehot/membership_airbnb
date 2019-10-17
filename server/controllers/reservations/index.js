const { Router } = require('express');

const router = Router();
const ctrl = require('./reservations.ctrl');

router
  .post('/', ctrl.postReserv)
  .get('/:userId', ctrl.getUserReserv)
  .get('/:roomId', ctrl.getRoomReserv)
  .delete('/:reservationId', ctrl.delReserv);

module.exports = router;
