const models = require('../../models');

const postReserv = async (req, res, next) => {
  try {
    const reserv = await models.Reservation.create(req.body);
    res.status(200).send(reserv);
  } catch (err) {
    next(err);
  }
};

const getUserReserv = async (req, res, next) => {
  const { user_id } = req.body;
  try {
    const reserv = await models.Reservation.findAll({
      where: { user_id },
    });
    if (!reserv) {
      res.status(204).end();
    } else {
      res.status(200).send(reserv);
    }
  } catch (err) {
    next(err);
  }
};

const getRoomReserv = async (req, res) => {
  res.status(200).send(req.user);
};

const delReserve = (req, res) => {
  res.clearCookie('access-token');
  res.redirect('/');
};

module.exports = {
  postReserv,
  getRoomReserv,
  getUserReserv,
  delReserve,
};
