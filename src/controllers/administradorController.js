const db = require("../database/models");

const administradorController = {
  adminReact: (req, res) => {
    return res.render("./admin/adminReact");
  },

  index: (req, res) => {
    db.User.findAll().then((users) => {
      res.render("./admin/adminvista", { users: users });
    });
  },
  
  product:  (req, res) => {
    db.Products.findAll(
      {limit: 20}).then(function (product) {
      return res.render("./admin/vistaProducts", { product: product });
    });
  },
  editvista: (req, res) => {
    db.User.findByPk(req.params.id).then(function (users) {
      res.render("./admin/useredit", { users: users });
    });
  },
  edit: (req, res) => {
    db.User.update(
      {
        name: req.body.name,
        email: req.body.email,
        category: req.body.category,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    return res.redirect("/admin");
  },
  delete: (req, res) => {
    console.log(req.params.id);
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/admin");
  },
};

module.exports = administradorController;
