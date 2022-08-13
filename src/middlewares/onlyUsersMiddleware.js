const db = require("../database/models");

function onlyUsersMiddleware(req, res, next) {
  if (req.session.userLogged) {
    req.session.userLogged = req.coockies.emailInCookie;
  } else {
    if (req.cookies.coockieEmail != undefined) {
      db.Users.findOne({
        where: { email: coockieEmail },
      }).then((usuario) => {
        if (usuario) {
          req.session.userLogged = usuario;
          res.locals.isLogged = true;
        } else {
          return res.render("./users/login");
        }
      });
    } else {
      return res.render("./users/login");
    }
  }
  next();
}

module.exports = onlyUsersMiddleware;
