const userModel = require('../models/User');


function userRegister(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.email;
	let usuario = userModel.findByField('email', emailInCookie);

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