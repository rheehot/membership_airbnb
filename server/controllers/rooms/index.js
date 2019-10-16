const { Router } = require('express');

const router = Router();
const ctrl = require('./rooms.ctrl');

router.get('/', ctrl.getAllRooms);
router.get('/search', ctrl.getFilteredRooms);

module.exports = router;
