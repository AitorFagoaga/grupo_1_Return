const db = require("../database/models");

const mainController = {
  index: (req, res) => {
    db.Products.findAll({ limit: 30 }).then(function (product) {
      return res.render("./index", { product: product });
    });
  },
};

module.exports = mainController;
