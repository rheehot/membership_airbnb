const { Router } = require('express');
const auth = require('../../middlewares/auth');

const router = Router();
const ctrl = require('./accounts.ctrl');

router.post('/join', ctrl.postJoin);

router.post('/login', ctrl.postLogin);
router.get('/islogin', auth.isAuthenticated, ctrl.getisLogin);

router.get('/logout', ctrl.getLogout);

module.exports = router;
