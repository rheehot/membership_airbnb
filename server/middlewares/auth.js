const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const EXPIRES = process.env.JWT_EXPIRE;

/**
 * JWT verify 유저 인증
 *
 * @param {*} req,res,next
 * @return {*} next
 */
const isAuthenticated = (req, res, next) => {
  const token = req.cookies['access-token'];
  if (!token) {
    res.status(204).send({ msg: 'login required' });
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
  } catch (err) {
    res.status(204).send({ msg: 'Invalid token' });
  }
  return next();
};

/**
 * JWT 발행
 *
 * @param {object} user
 * @return {object} {token, cookieOption}
 */
const signToken = (user) => {
  const { user_id, email } = user;
  const token = jwt.sign({ user_id, email }, SECRET, { expiresIn: EXPIRES });

  const cookieOption = {
    maxAge: EXPIRES,
    expires: new Date(Date.now() + EXPIRES),
    httpOnly: true,
    signed: true,
  };

  return { token, cookieOption };
};

module.exports = { signToken, isAuthenticated };
