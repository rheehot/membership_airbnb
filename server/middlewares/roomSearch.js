const Sequelize = require('sequelize');
const dayjs = require('dayjs');

const op = Sequelize.Op;

const roomSearch = (req, res, next) => {
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

  const roomQuery = {};
  const reservationQuery = {};

  if (min_price || max_price) {
    const min = min_price || 0;
    const max = max_price || Infinity;

    roomQuery.price = { [op.between]: [min, max] };
  }

  if (check_in || check_out) {
    const checkIn = check_in || dayjs(check_out)
      .subtract(1, 'day')
      .format('YYYY-MM-DD');
    const checkOut = check_out || dayjs(check_in)
      .add(1, 'day')
      .format('YYYY-MM-DD');

    const dateQuery = { [op.notBetween]: [checkIn, checkOut] };
    reservationQuery.check_in = dateQuery;
    reservationQuery.check_out = dateQuery;

    const { not } = op;
    reservationQuery[not] = [
      { check_in: { [op.lte]: new Date(checkIn) } },
      { check_out: { [op.gte]: new Date(checkOut) } },
    ];
  }

  if (num_guest) {
    roomQuery.num_guest = { [op.gte]: num_guest };
  }
  if (num_bed) {
    roomQuery.num_bed = { [op.gte]: num_bed };
  }
  if (num_bedroom) {
    roomQuery.num_bedroom = { [op.gte]: num_bedroom };
  }
  if (num_bathroom) {
    roomQuery.num_bathroom = { [op.gte]: num_bathroom };
  }

  req.roomQuery = roomQuery;
  req.reservationQuery = reservationQuery;

  return next();
};

module.exports = roomSearch;
