const { log } = require("console");
const fs = require("fs");
const path = require("path");
const archivoRuta = path.join(__dirname, "../data/users.json");
const db = require("../database/models");

const User = {
  //encontrar a todos los usuarios
  findAllUsers: function () {
    db.Users.findAll().then(function (user) {
      return user;
    });
  },
  //buscar usuario por id ( pk = private key )
  findByPk: function (id) {
    db.Users.findByPk(id).then(function (user) {
      return user;
    });
  },

  findByField: function (field, value) {
    const email = field;
    db.Users.findOne({
      where: field == value,
    }).then((resultado) => {
      // console.log(resultado)
      return resultado;
    });
  },

  create: function (userData) {
    let newUser = db.Users.create({
      name: userData.name,
      category: userData.category,
      email: userData.email,
      password: userData.password,
      image: userData.filename,
    });

    return newUser;
  },
  //borrar usuario
  delete: function (id) {
    db.Users.destroy({
      where: {
        id: id,
      },
    });
    res.redirect("/products/productList");
  },
};

module.exports = User;
