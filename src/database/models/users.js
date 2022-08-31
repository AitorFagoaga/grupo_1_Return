module.exports = (sequelize, dataTypes) => {
  //el alias recomendado agregarlo en plural.
  let alias = "Users";
  let cols = {

    
    category: {
      type: dataTypes.STRING,
    },
    email: {
      type: dataTypes.STRING,
    },
    password: {
      type: dataTypes.STRING,
    },
    name: {
      type: dataTypes.STRING,
    },
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: dataTypes.STRING,
    }
  };
  let config = {
    //el nombre de la tabla se llama "users".
    tableName: "users",
    timestamps: false,
  };
  const User = sequelize.define(alias, cols, config);

  User.associate = function (models) {
    User.hasMany(models.Products, {
      foreignKey: "user_id",
      as: "products",
    });
  };

  return User;
};
