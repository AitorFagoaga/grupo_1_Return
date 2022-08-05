const User = require("../models/User");
const db = require("../database/models");

function onlyUsers(req, res, next) {
  let emailInCookie = req.cookies.coockieEmail;

  //let userfromcookie = User.findByField("email", emailInCookie);

  let usuario = db.Users.findOne({
    where: { email: emailInCookie },
  }).then((usuarios) => {
    console.log(usuarios);
    return usuarios;
  });

  if (emailInCookie) {
    //para hacer como estaba antes sería poner donde esta usuario, poner userfromcookie y descomentar userfromcookie
    req.session.userLogged = usuario;
  } else {
    res.locals.isLogged = false;
  }

  if (req.session.userLogged) {
    res.locals.logged = true;
  }

  next();
}

module.exports = onlyUsers;
