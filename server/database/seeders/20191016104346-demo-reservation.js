
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Reservations', [
    {
      userId: 1,
      roomId: 1,
      checkIn: '2020-01-01',
      checkOut: '2020-02-01',
      adult: 3,
      child: 2,
      infant: 2,
    },
    {
      userId: 1,
      roomId: 3,
      checkIn: '2020-03-01',
      checkOut: '2020-04-01',
      adult: 5,
      child: 2,
      infant: 2,
    },
    {
      userId: 1,
      roomId: 2,
      checkIn: '2020-01-15',
      checkOut: '2020-02-04',
      adult: 1,
      child: 0,
      infant: 0,
    },
  ],
  {}),

  down: (queryInterface) => queryInterface.bulkDelete('Reservations', {
    userId: {
      $in: [1],
    },
  }, {}),
};
