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
  const { booker_id } = req.params;

  try {
    const reserv = await models.Reservation.findAll({
      where: { booker_id },
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

const getRoomReserv = async (req, res, next) => {
  const { room_id } = req.params;
  try {
    const reserv = await models.Reservation.findAll({
      where: { room_id },
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

const delReserv = async (req, res, next) => {
  const { id } = req.params;
  try {
    await models.Reservation.destroy({
      where: { id },
    });
    res.status(200).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postReserv,
  getRoomReserv,
  getUserReserv,
  delReserv,
};
