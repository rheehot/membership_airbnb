module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    'Reservation',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ReservationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      checkIn: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      checkOut: {
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
      foreignKey: 'userId',
      targetKey: 'id',
    });
    Reservation.belongsTo(models.Room, {
      foreignKey: 'roomId',
      targetKey: 'id',
    });
  };
  return Reservation;
};
