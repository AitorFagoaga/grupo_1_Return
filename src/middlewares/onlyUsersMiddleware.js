const userModel = require("../models/User");
const db = require("../database/models");

function onlyUsers(req, res, next) {
  res.locals.isLogged = false;

  let emailInCookie = req.cookies.coockieEmail;

  // let usuario = userModel.findByField("email", emailInCookie.coockieEmail);

  let usuario = db.Users.findOne({
    where: { email: emailInCookie },
  }).then((usuarios) => {
    return usuarios;
  });

  if (usuario) {
    req.session.usuarioLogeado = usuario;
  }

  if (req.session.usuarioLogeado) {
    res.locals.isLogged = true;
    res.locals.usuarioLogeado = req.session.usuarioLogeado;
  }

  next();
}

module.exports = onlyUsers;
