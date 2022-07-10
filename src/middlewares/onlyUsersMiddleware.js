function onlyUsers (req,res,next){

    if (req.session.userLogged){
        res.locals.logged = true;
        // con esto paso lo que tengo en session a una varible local
        res.locals.userLogged = req.locals.userLogged;
    }else{
        res.locals.logged = false;
    }

    next()
};

module.exports = onlyUsers;