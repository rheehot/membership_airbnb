module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      userId: 'dofl',
      pw: 'boostcamp',
      name: '조애리',
    },
    {
      userId: 'dofl1',
      pw: 'boostcamp1',
      name: '조일리',
    },
    {
      userId: 'dofl2',
      pw: 'boostcamp2',
      name: '조이리',
    },
    {
      userId: 'dofl3',
      pw: 'boostcamp3',
      name: '조삼리',
    },
    {
      userId: 'dofl4',
      pw: 'boostcamp4',
      name: '조사리',
    },
    {
      userId: 'dofl5',
      pw: 'boostcamp5',
      name: '조오리',
    },
    {
      userId: 'dofl6',
      pw: 'boostcamp6',
      name: '조육리',
    },
    {
      userId: 'dofl7',
      pw: 'boostcamp7',
      name: '조칠리',
    },
    {
      userId: 'dofl8',
      pw: 'boostcamp8',
      name: '조팔리',
    },
    {
      userId: 'dofl9',
      pw: 'boostcamp9',
      name: '조구리',
    },
  ],
  {}),

  down: (queryInterface) => queryInterface.bulkDelete('Users', {
    userId: {
      $in: ['dofl', 'dofl1', 'dofl2', 'dofl3', 'dofl4', 'dofl5', 'dofl6', 'dofl7', 'dofl8', 'dofl9'],
    },
  }, {}),
};
