const passwordHash = require('../utils/passwordHash');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 50],
        },
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING,
        validate: {
          len: [8, 20],
        },
        allowNull: false,
      },
      name: { type: DataTypes.STRING },
      birth: { type: DataTypes.DATE },
      gender: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      phone: { type: DataTypes.STRING },
      favorite: { type: DataTypes.STRING },
      profile: { type: DataTypes.STRING },
    },
    {},
  );

  User.associate = (models) => {
    User.hasMany(models.Room, {
      foreignKey: 'hostId',
      sourceKey: 'id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    User.belongsToMany(models.Room, {
      through: 'Reservation',
      as: 'rooms',
      foreignKey: 'userId',
      otherKey: 'roomId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  User.beforeCreate((user) => {
    user.pw = passwordHash(user.pw);
  });

  return User;
};
