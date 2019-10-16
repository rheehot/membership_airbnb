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

const getFilteredRooms = async (req, res, next) => {};

module.exports = { getAllRooms, getFilteredRooms };
