const Sequelize = require('sequelize');

const op = Sequelize.Op;

const searchRoomCheck = (req, res, next) => {
  const roomQuery = {};
  const reservationQuery = {};

  const {
    minPrice,
    maxPrice,
    checkIn,
    checkOut,
    num_guest,
    num_bed,
    num_bedroom,
    num_bathroom,
  } = req.query;

  if (minPrice || maxPrice) {
    let min;
    let max;
    if (!minPrice) {
      min = 0;
    } else if (!maxPrice) {
      max = Infinity;
    } else {
      roomQuery.price = { [op.between]: [min, max] };
    }
  }

  if (checkIn && checkOut) {
    reservationQuery.checkIn = {
      [op.notBetween]: [checkIn, checkOut],
    };
    reservationQuery.checkOut = {
      [op.notBetween]: [checkIn, checkOut],
    };
  }

  if (num_guest) {
    roomQuery.num_guest = { [op.gte]: num_guest };
  }
  if (num_bed) {
    roomQuery.num_guest = { [op.gte]: num_bed };
  }
  if (num_bedroom) {
    roomQuery.num_guest = { [op.gte]: num_bedroom };
  }
  if (num_bathroom) {
    roomQuery.num_guest = { [op.gte]: num_bathroom };
  }

  req.roomQuery = roomQuery;
  req.reservationQuery = reservationQuery;

  return next();
};

module.exports = { searchRoomCheck };
