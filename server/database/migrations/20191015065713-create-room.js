module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Rooms', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    hostId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    guest: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    price: { type: Sequelize.INTEGER },
    place: { type: Sequelize.STRING },
    type: { type: Sequelize.INTEGER },
    num_bed: { type: Sequelize.INTEGER },
    num_bedroom: { type: Sequelize.INTEGER },
    num_bathroom: { type: Sequelize.INTEGER },
    rate: { type: Sequelize.INTEGER },
    num_review: { type: Sequelize.INTEGER },
    image: { type: Sequelize.STRING },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Rooms'),
};
