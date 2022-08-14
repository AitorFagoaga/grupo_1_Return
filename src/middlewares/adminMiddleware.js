const db = require("../database/models");

function adminMiddleware(req, res, next) {
  if (req.session.userLogged) {
    if (req.session.userLogged.email == "pepito@hotmail.com") {
      next();
    }
  } else {
    res.redirect("./");
  }
}

module.exports = adminMiddleware;
