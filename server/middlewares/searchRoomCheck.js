const Sequelize = require('sequelize');

const op = Sequelize.Op;

const searchRoomCheck = (req, res, next) => {
  const roomQuery = {};
  const reservationQuery = {};

  const {
    min_price,
    max_price,
    check_in,
    check_out,
    num_guest,
    num_bed,
    num_bedroom,
    num_bathroom,
  } = req.query;

  if (min_price || max_price) {
    let min;
    let max;
    if (!min_price) {
      min = 0;
    } else if (!max_price) {
      max = Infinity;
    } else {
      roomQuery.price = { [op.between]: [min, max] };
    }
  }

  if (check_in && check_out) {
    reservationQuery.checkIn = {
      [op.notBetween]: [check_in, check_out],
    };
    reservationQuery.checkOut = {
      [op.notBetween]: [check_in, check_out],
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
