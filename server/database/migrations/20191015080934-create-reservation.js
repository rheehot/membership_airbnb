module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Reservations', {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    roomId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Rooms',
        key: 'id',
      },
    },
    checkIn: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    checkOut: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    adult: { type: Sequelize.INTEGER },
    child: { type: Sequelize.INTEGER },
    infant: { type: Sequelize.INTEGER },
    state: { type: Sequelize.STRING },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Reservations'),
};
