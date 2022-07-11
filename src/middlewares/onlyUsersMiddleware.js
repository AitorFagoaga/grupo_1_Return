const User = require('../models/User');

function onlyUsers (req,res,next){
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.coockieEmail;
    let userfromcookie = User.findByField('email', emailInCookie);
    
    if(emailInCookie){
        req.session.userLogged = userfromcookie;
    }

     if (req.session.userLogged){

         res.locals.logged = true;

     }


     next()
};

 module.exports = onlyUsers;