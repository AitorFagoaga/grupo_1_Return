// si hay alguien en session se redirigira a el home
function loggedUser (req,res,next){
    if(req.session.userLogged){
        return res.redirect('/')
    }
    next()
};

module.exports = loggedUser;