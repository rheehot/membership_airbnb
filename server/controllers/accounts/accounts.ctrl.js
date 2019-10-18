const models = require('../../models');
const auth = require('../../middlewares/auth');
const passwordHash = require('../../utils/passwordHash');

// 회원가입 - 유저 등록
/**
 * @api {post} /api/accounts/join
 * @apiName CreateUser
 * @apiGroup Accounts
 *
 * @apiParam {Json} body body.
 * @apiParamExample {json} User Action:
 * {
 *     "user_id": "user1",
 *     "pw": "qwerty",
 *     "name": "aer4ee",
 *     "birth": "1567601355922",
 *     "gender": "female",
 *     "email": "email@gmail.com",
 *     "phone": "01012345678",
 *     "favorite": "a,b,c",
 *     "profile": "a.png",
 * }
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 */
const postJoin = async (req, res, next) => {
  try {
    const user = await models.User.create(req.body);
    const { token, cookieOption } = auth.signToken(user);
    res.cookie('access-token', token, cookieOption);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
};

// 로그인 - 유저 체크
/**
 * @api {post} /api/accounts/login Check User
 * @apiName Login
 * @apiGroup Accounts
 *
 * @apiParam {Json} body body.
 * @apiParamExample {json} User Action:
 * {
 *     "user_id": "user1",
 *     "pw": "qwerty",
 * }
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * @apiErrorExample Error-Response:
 * HTTP/1.1 401
 * HTTP/1.1 403
 */
const postLogin = async (req, res, next) => {
  const { user_id, pw } = req.body;
  try {
    const user = await models.User.findOne({
      where: { user_id, pw: passwordHash(pw) },
    });
    if (!user) {
      res.status(204).end();
    } else {
      const { token, cookieOption } = auth.signToken(user);
      res.cookie('access-token', token, cookieOption);
      res.status(200).end();
    }
  } catch (err) {
    next(err);
  }
};

// 로그아웃
/**
 * @api {get} /api/accounts/logout Logout
 * @apiName Logout
 * @apiGroup Accounts
 */
const getLogout = (req, res) => {
  res.clearCookie('access-token');
  res.redirect('/');
};

module.exports = {
  postJoin,
  postLogin,
  getLogout,
};
