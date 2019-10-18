module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    'Reservation',
    {
      booker_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      check_in: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      check_out: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      adult: { type: DataTypes.INTEGER },
      child: { type: DataTypes.INTEGER },
      infant: {
        type: DataTypes.INTEGER,
        validate: {
          max: 5,
        },
      },
      state: { type: DataTypes.STRING },
    },
    {},
  );
  Reservation.associate = (models) => {
    Reservation.belongsTo(models.User, {
      foreignKey: 'booker_id',
      targetKey: 'id',
    });
    Reservation.belongsTo(models.Room, {
      foreignKey: 'room_id',
      targetKey: 'id',
    });
  };
  return Reservation;
};
