const models = require('../../models');
const paginate = require('../../utils/pagenation');
const { saveCache } = require('../../middlewares/roomCache');

const getAllRooms = async (req, res, next) => {
  const pageOption = paginate(req.query.page, process.env.PAGE_LIMIT);
  try {
    const rooms = await models.Room.findAll(pageOption);
    res.status(200).send(rooms);
  } catch (err) {
    next(err);
  }
};

const getRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    const room = await models.Room.findOne({ where: { id } });
    await saveCache(room);
    res.status(200).send(room);
  } catch (err) {
    next(err);
  }
};

const updateRoom = async (req, res, next) => {
  const { id } = req.params;
  const { room } = req.body;

  try {
    const updatedRoom = await models.Room.update(room, {
      where: { id },
    });
    res.status(200).send(updatedRoom);
  } catch (err) {
    next(err);
  }
};

const deleteRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    await models.Room.destroy({
      where: { id },
    });
    res.status(200).end();
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

module.exports = {
  getAllRooms,
  getRoom,
  updateRoom,
  deleteRoom,
  getFilteredRooms,
};
