const { Router } = require('express');
const auth = require('../../middlewares/auth');

const router = Router();
const ctrl = require('./accounts.ctrl');

router
  .post('/join', ctrl.postJoin)
  .post('/login', ctrl.postLogin)
  .get('/islogin', auth.isAuthenticated, ctrl.getisLogin)
  .get('/logout', ctrl.getLogout);

module.exports = router;
