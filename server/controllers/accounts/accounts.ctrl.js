const models = require('../../models');
const auth = require('../../middlewares/auth');
const passwordHash = require('../../utils/passwordHash');

const postJoin = async (req, res, next) => {
  try {
    const user = await models.User.create(req.body);
    res.cookie('access-token', ...auth.signToken(user));
    res.status(200).end();
  } catch (err) {
    next(err);
  }
};

const postLogin = async (req, res, next) => {
  const { user_id, pw } = req.body;
  try {
    const user = await models.User.findOne({
      where: { user_id, pw: passwordHash(pw) },
    });
    if (!user) {
      res.status(204).end();
    } else {
      res.cookie('access-token', ...auth.signToken(user));
      res.status(200).end();
    }
  } catch (err) {
    next(err);
  }
};

const getLogout = (req, res) => {
  res.clearCookie('access-token');
  res.redirect('/');
};

module.exports = {
  postJoin,
  postLogin,
  getLogout,
};
