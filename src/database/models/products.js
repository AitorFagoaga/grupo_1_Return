module.exports = (sequelize, dataTypes) => {
  //el alias recomendado agregarlo en plural.
  let alias = "Products";
  let cols = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: dataTypes.STRING(100),
    },
    price: {
      type: dataTypes.DECIMAL(10,2),
    },
    image: {
      type: dataTypes.STRING(100),
    },
    name: {
      type: dataTypes.STRING,
    },
    user_id: {
      type: dataTypes.INTEGER(11),
    },
    category:{
      type: dataTypes.STRING(100),
    }
  };
  let config = {
    //el nombre de la tabla se llama "users".
    tableName: "products",
    timestamps: false,
  };
  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  };

  return Product;
};
