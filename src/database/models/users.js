module.exports = (sequelize, dataTypes) => {
  //el alias recomendado agregarlo en plural.
  let alias = "Users";
  let cols = {
    image: {
      type: dataTypes.STRING,
    },
    category: {
      type: dataTypes.STRING,
    },
    email: {
      type: dataTypes.STRING,
    },
    password: {
      type: dataTypes.STRING,
    },
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    //el nombre de la tabla se llama "users".
    tableName: "users",
    timestamps: false,
  };
  const User = sequelize.define(alias, cols, config);

  return User;
};
