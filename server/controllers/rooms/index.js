const { Router } = require('express');
const { searchCache, deleteCache } = require('../../middlewares/roomCache');
const roomSearch = require('../../middlewares/roomSearch');
const auth = require('../../middlewares/auth');
const csrfProtection = require('../../middlewares/csrf');

const router = Router();
const ctrl = require('./rooms.ctrl');

router
  .get('/', ctrl.getAllRooms)
  .get('/:id', searchCache, ctrl.getRoom)
  .put(
    '/:id',
    csrfProtection,
    auth.isAuthenticated,
    deleteCache,
    ctrl.updateRoom,
  )
  .delete(
    '/:id',
    csrfProtection,
    auth.isAuthenticated,
    deleteCache,
    ctrl.deleteRoom,
  )
  .get('/search', roomSearch, ctrl.getFilteredRooms);

module.exports = router;
