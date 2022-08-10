const db = require("../database/models");

const administradorController = {
  index: (req, res) => {
    db.Users.findAll().then(function (users) {
      res.render("./admin/adminvista", { users: users });
    });
  },
  editvista: (req, res) => {
    db.Users.findByPk(req.params.id).then(function (user) {
      res.render("./admin/useredit", { user: user });
    });
  },
  edit: (req, res) => {
    db.Users.update(
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
    db.Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/admin");
  },
};

module.exports = administradorController;
