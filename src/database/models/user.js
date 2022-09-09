module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  let columns = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },

    email: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
  };
  let configurations = {
    //el nombre de la tabla se llama "users".
    tableName: "User",
    timestamps: false,
  };
  const User = sequelize.define(alias, columns, configurations);

  User.associate = (models) => {
    User.hasMany(models.Order, {
      as: "order",
      foreignKey: "userId",
    });
  };

  return User;
};
