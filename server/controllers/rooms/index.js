const { Router } = require('express');
const { searchCache, deleteCache } = require('../../middlewares/roomCache');
const roomSearch = require('../../middlewares/roomSearch');
const auth = require('../../middlewares/auth');
const csrfProtection = require('../../middlewares/csrf');

const router = Router();
const ctrl = require('./rooms.ctrl');

router
  .get('/', ctrl.getAllRooms)
  .get('/search', roomSearch, ctrl.getFilteredRooms)
  .get('/:id', searchCache, ctrl.getRoom)
  .use(csrfProtection)
  .use(auth.isAuthenticated)
  .put('/:id', deleteCache, ctrl.updateRoom)
  .delete('/:id', deleteCache, ctrl.deleteRoom);

module.exports = router;
