module.exports = (sequelize, dataTypes) => {
    //el alias recomendado agregarlo en plural.
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING
        }

    };
    let config = {
        //el nombre de la tabla se llama "users".
        tableName: "products", 
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    return Product;
}