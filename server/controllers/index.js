const { Router } = require('express');
const express = require('express');

const router = Router();

router.use('/', express.static('./apidoc'));
router.use('/accounts', require('./accounts'));
router.use('/rooms', require('./rooms'));
router.use('/reservations', require('./reservations'));

module.exports = router;
