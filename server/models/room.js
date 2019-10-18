module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    'Room',
    {
      host_id: {
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
      type: { type: DataTypes.STRING },
      num_bed: { type: DataTypes.INTEGER },
      num_bedroom: { type: DataTypes.INTEGER },
      num_bathroom: { type: DataTypes.INTEGER },
      rate: { type: DataTypes.INTEGER },
      num_review: { type: DataTypes.INTEGER },
      thumbnail: { type: DataTypes.STRING },
    },
    {},
  );
  Room.associate = (models) => {
    Room.belongsTo(models.User, {
      foreignKey: 'host_id',
      targetKey: 'id',
    });
    Room.hasMany(models.Reservation, {
      foreignKey: 'room_id',
      sourceKey: 'id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Room;
};
