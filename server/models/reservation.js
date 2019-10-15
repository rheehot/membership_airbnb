module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    'Reservation',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      roomId: {
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
  Reservation.associate = (models) => {};
  return Reservation;
};
