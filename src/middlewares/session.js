const userModel = require('../models/User');
const db = require("../database/models")


function userRegister(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.email;
	// let usuario = db.Users.findOne({
	// 	where: {
	// 		email : req.body.email
	// 	}
	// }).then((usuario) => {
	// 	return console.log("fucnione")
	// });
	let usuario = userModel.findByField("email", emailInCookie);
	//console.log(emailInCookie);

	if (usuario) {
		req.session.usuarioLogeado = usuario;
	}

	if (req.session.usuarioLogeado) {
		res.locals.isLogged = true;
		res.locals.usuarioLogeado = req.session.usuarioLogeado;
	}

	next();
}

module.exports = userRegister;