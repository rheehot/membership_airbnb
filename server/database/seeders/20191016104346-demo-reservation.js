
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Reservations', [
    {
      booker_id: 1,
      room_id: 1,
      check_in: '2020-01-01',
      check_out: '2020-02-01',
      adult: 3,
      child: 2,
      infant: 2,
    },
    {
      booker_id: 1,
      room_id: 3,
      check_in: '2020-03-01',
      check_out: '2020-04-01',
      adult: 5,
      child: 2,
      infant: 2,
    },
    {
      booker_id: 1,
      room_id: 2,
      check_in: '2020-01-15',
      check_out: '2020-02-04',
      adult: 1,
      child: 0,
      infant: 0,
    },
  ],
  {}),

  down: (queryInterface) => queryInterface.bulkDelete('Reservations', {
    booker_id: {
      $in: [1],
    },
  }, {}),
};
