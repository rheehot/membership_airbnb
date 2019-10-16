const models = require('../../models');
const paginate = require('../../utils/pagenation');

const getAllRooms = async (req, res, next) => {
  const pageOption = paginate(req.query.page, process.env.PAGE_LIMIT);
  try {
    const rooms = await models.Room.findAll(pageOption);
    res.status(200).send(rooms);
  } catch (err) {
    next(err);
  }
};

const getFilteredRooms = async (req, res, next) => {
  const pageOption = paginate(req.query.page, process.env.PAGE_LIMIT);

  try {
    const filteredRooms = await models.Room.findAll({
      ...pageOption,
      where: req.roomQuery,
      include: [
        {
          model: models.Reservation,
          where: req.reservationQuery,
        },
      ],
    });
    res.status(200).send(filteredRooms);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllRooms, getFilteredRooms };
