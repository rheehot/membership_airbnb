const { Router } = require('express');

const router = Router();

router.use('/accounts', require('./accounts'));
router.use('/rooms', require('./rooms'));
// router.use('/reservations', require('./reservations'));

module.exports = router;
