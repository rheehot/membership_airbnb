const { Router } = require('express');
const { searchRoomCheck } = require('../../middlewares/searchRoomCheck');

const router = Router();
const ctrl = require('./rooms.ctrl');

router.get('/', ctrl.getAllRooms);
router.get('/search', searchRoomCheck, ctrl.getFilteredRooms);

module.exports = router;
