const { validationResult } = require("express-validator");
const userModel = require("../models/User");
const bcryptjs = require("bcryptjs");
const db = require("../database/models");

const usersController = {
  login: (req, res) => {
    return res.render("./users/login");
  },
  processLogin: (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((usuario) => {
      if (usuario == null) {
        return res.render("./users/login", {
          errors: {
            email: {
              msg: "el e-mail es incorrecto",
            },
          },
        });
      }

      const comparePassword = bcryptjs.compareSync(
        req.body.password,
        usuario.password
      );

      if (comparePassword) {
        //borro password del usuario por seguridad

        req.session.userLogged = usuario;

        if (req.body.recordar) {
          res.cookie("coockieEmail", usuario.email, { maxAge: 1000 * 60 * 5 });
        }

        return res.redirect("./profile");
      } else {
        return res.render("./users/login", {
          errors: {
            email: {
              msg: "La contraseña es incorrecta",
            },
          },
        });
      }
    });
  },
  register: (req, res) => {
    return res.render("./users/register");
  },
  processRegister: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("./users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    let newUsers = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      image: req.file.filename,
    };
    db.User.create(newUsers).then((user) => {
      return res.render("./users");
    });
    

    return res.redirect("./profile");
  },

  profile: (req, res) => {
    return res.render("./users/profile", {
      user: req.session.userLogged,
    });
  },
  logout: (req, res) => {
    res.clearCookie("coockieEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};
module.exports = usersController;
