module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Reservations', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT,
    },
    booker_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      foreignKey: true,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    room_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      foreignKey: true,
      references: {
        model: 'Rooms',
        key: 'id',
      },
    },
    check_in: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    check_out: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    adult: { type: Sequelize.INTEGER },
    child: { type: Sequelize.INTEGER },
    infant: { type: Sequelize.INTEGER },
    state: {
      type: Sequelize.STRING,
      defaultValue: 'reserve',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Reservations'),
};
