const db = require("../database/models");

function adminUser(req, res, next) {
    
    if (req.session.userLogged  ){
        if(req.session.userLogged.email == "admin@mail.com"){
            next()
        }
    }else{
        
        
    }
}

module.exports = adminUser;