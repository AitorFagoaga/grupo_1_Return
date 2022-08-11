module.exports = function (req,res,next){
    let emailInCookie = req.cookies.coockieEmail;
    if(emailInCookie){
        req.session.usuarioLogeado = emailInCookie;
    }
    next()
}