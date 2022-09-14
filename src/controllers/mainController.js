const db = require("../database/models");

const mainController = {
  index: (req, res) => {
    db.Products.findAll(
      {limit: 20}).then(function (product) {
      return res.render("./index", { product: product });
    });
  },
  indexUno: (req, res) => {
    db.Products.findAll({limit: 20 ,offset:20}).then(function (product) {
      return res.render("./index", { product: product });
    });
  },
  indexDos: (req, res) => {
    db.Products.findAll({limit: 20,offset:40}).then(function (product) {
      return res.render("./index", { product: product });
    });
  },
  indexTres: (req, res) => {
    db.Products.findAll({limit: 20,offset:60}).then(function (product) {
      return res.render("./index", { product: product });
    });
  },
};

module.exports = mainController;
