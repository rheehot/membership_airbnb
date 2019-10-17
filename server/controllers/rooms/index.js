const { Router } = require('express');
const { searchRoomCheck } = require('../../middlewares/searchRoomCheck');

const router = Router();
const ctrl = require('./rooms.ctrl');

router
  .get('/', ctrl.getAllRooms)
  .get('/search', searchRoomCheck, ctrl.getFilteredRooms);

module.exports = router;
