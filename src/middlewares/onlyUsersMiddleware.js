const User = require("../models/User");
const db = require("../database/models");

function onlyUsers(req, res, next) {
  if (req.session.userLogged) {
    req.locals.userLogged = req.session.userLogged;
  } else {
    let emailInCookie = req.cookies.coockieEmail;
    if (emailInCookie) {
      db.Users.findOne({
        where: { email: emailInCookie },
      }).then((usuario) => {
        if (usuario) {
          req.session.userLogged = usuario;
          req.locals.userLogged = usuario;
        } else {
          return res.render("./");
        }
      });
    } else {
      return res.render("./");
    }
  }
  next();
}

module.exports = onlyUsers;
