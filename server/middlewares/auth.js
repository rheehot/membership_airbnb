const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const EXPIRES = process.env.JWT_EXPIRE;

const signToken = (user) => {
  const { user_id, email } = user;
  return jwt.sign({ user_id, email }, SECRET, { expiresIn: EXPIRES });
};

const isAuthenticated = (req, res, next) => {
  const token = req.cookies['access-token'];
  if (!token) return next();

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
  } catch (err) {
    req.user = null;
  }
  return next();
};

module.exports = { signToken, isAuthenticated };
