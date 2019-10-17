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
    res.status(200).send({
      status: 401,
      msg: 'login required',
    });
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(200).send({
      status: 403,
      msg: 'Invalid token',
    });
  }
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
    expires: new Date(Date.now() + 1000 * 60 * 60),
    httpOnly: true,
  };

  return { token, cookieOption };
};

module.exports = { signToken, isAuthenticated };
