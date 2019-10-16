
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Rooms', [
    {
      hostId: 1,
      name: '숙소1',
      num_guest: 8,
      price: 150000,
      type: '아파트',
      num_bed: 2,
      num_bedroom: 2,
      num_bathroom: 2,
    },
    {
      hostId: 1,
      name: '숙소2',
      num_guest: 2,
      price: 10000,
      type: '원룸',
      num_bed: 1,
      num_bedroom: 1,
      num_bathroom: 1,
    },
    {
      hostId: 1,
      name: '숙소3',
      num_guest: 12,
      price: 200000,
      type: '풀빌라',
      num_bed: 5,
      num_bedroom: 3,
      num_bathroom: 3,
    },
  ],
  {}),

  down: (queryInterface) => queryInterface.bulkDelete('Rooms', {
    hostId: {
      $in: [1],
    },
  }, {}),
};
