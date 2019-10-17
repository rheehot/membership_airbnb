module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      user_id: 'dofl',
      pw: 'boostcamp',
      name: '조애리',
    },
    {
      user_id: 'dofl1',
      pw: 'boostcamp1',
      name: '조일리',
    },
    {
      user_id: 'dofl2',
      pw: 'boostcamp2',
      name: '조이리',
    },
    {
      user_id: 'dofl3',
      pw: 'boostcamp3',
      name: '조삼리',
    },
    {
      user_id: 'dofl4',
      pw: 'boostcamp4',
      name: '조사리',
    },
    {
      user_id: 'dofl5',
      pw: 'boostcamp5',
      name: '조오리',
    },
    {
      user_id: 'dofl6',
      pw: 'boostcamp6',
      name: '조육리',
    },
    {
      user_id: 'dofl7',
      pw: 'boostcamp7',
      name: '조칠리',
    },
    {
      user_id: 'dofl8',
      pw: 'boostcamp8',
      name: '조팔리',
    },
    {
      user_id: 'dofl9',
      pw: 'boostcamp9',
      name: '조구리',
    },
  ],
  {}),

  down: (queryInterface) => queryInterface.bulkDelete('Users', {
    user_id: {
      $in: ['dofl', 'dofl1', 'dofl2', 'dofl3', 'dofl4', 'dofl5', 'dofl6', 'dofl7', 'dofl8', 'dofl9'],
    },
  }, {}),
};
