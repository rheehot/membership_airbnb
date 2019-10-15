module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    'Room',
    {
      hostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 100],
        },
        allowNull: false,
      },
      num_guest: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: { type: DataTypes.INTEGER },
      place: { type: DataTypes.STRING },
      type: { type: DataTypes.INTEGER },
      num_bed: { type: DataTypes.INTEGER },
      num_bedroom: { type: DataTypes.INTEGER },
      num_bathroom: { type: DataTypes.INTEGER },
      rate: { type: DataTypes.INTEGER },
      num_review: { type: DataTypes.INTEGER },
      image: { type: DataTypes.STRING },
    },
    {},
  );
  Room.associate = (models) => {
    Room.belongsTo(models.User, {
      foreignKey: 'hostId',
      targetKey: 'id',
    });
    Room.belongsToMany(models.User, {
      through: 'Reservation',
      as: 'users',
      foreignKey: 'roomId',
      otherKey: 'userId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Room;
};
