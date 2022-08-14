const db = require("../database/models");

function userRegister(req, res, next) {
  res.locals.isLogged = false;

  let emailInCookie = req.cookies.coockieEmail;

  if (req.session.userLogged || emailInCookie) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;

    if (emailInCookie) {
      db.Users.findOne({
        where: {
          email: emailInCookie,
        },
      }).then((usuario) => {
        req.session.userLogged = usuario;
      });
    }
  }
  next();
}

module.exports = userRegister;
