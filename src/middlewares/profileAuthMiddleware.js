// si no se encuentra alguien en session se redirigira a el login para que inice session
function profileAuth (req,res,next){
    if(!req.session.userLogged){
        return res.redirect('../users/login');
    }
    next()
};

module.exports = profileAuth;