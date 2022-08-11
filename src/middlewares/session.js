const db = require("../database/models");

function userRegister(req, res, next) {

  let emailInCookie = req.cookies.coockieEmail;
  

  // let usuario = userModel.findByField("email", emailInCookie.coockieEmail);

  // let usuario = db.Users.findOne({
  //   where: {
  //       email: emailInCookie
  //     }
  //    }).then((usuarios) => {
  //   return usuarios;
  // });

  // if (usuario) {
  //   req.session.usuarioLogeado = usuario;
  // }
  if (req.session&& req.session.userLogged) {
    res.locals.isLogged = true;
    // res.locals.usuarioLogeado = req.session.usuarioLogeado;
  }else{
    res.locals.isLogged = false;
  }
  
  if(emailInCookie){
    db.Users.findOne({
      where: {
          email: emailInCookie
        }
      }).then((usuario) => {
          if (usuario) {
            req.session.usuarioLogeado = usuario;
          }
    });
  }


  if (req.session.usuarioLogeado) {
    res.locals.isLogged = true;
    res.locals.usuarioLogeado = req.session.usuarioLogeado;
  }

  next();
}

module.exports = userRegister;