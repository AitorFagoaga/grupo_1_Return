const db = require("../database/models");

function adminMiddleware(req, res, next) {
  if (req.session.userLogged) {
    if (req.session.userLogged.email == "pepe@hotmail.com") {
      console.log("ruta de pepe admin");
      return next();
    } else {
      return res.redirect("/");
    }
  }
  return res.redirect("/");
}

module.exports = adminMiddleware;
