const { validationResult } = require('express-validator');
const userModel = require('../models/User');
const bcryptjs = require('bcryptjs'); 

const usersController = {

    login: (req, res) => {
        return res.render('./users/login');
    },
    processLogin: (req, res) => {
        let usuario = userModel.findByField('email', req.body.email);
        //let usuarioLogeado = req.cookies.userLogged = usuario;
        console.log(usuario)
        if (usuario){
            let comparePassword = bcryptjs.compareSync(req.body.password, usuario.password)
            if(comparePassword == true){
                return res.redirect('/')
            }else{
                return res.render ('./users/login', {
                    errors: {
                        email: {
                            msg: "El mail o la contraseña es incorrecta"
                        }
                    }
                })
            }
        }else {
            return res.render ('./users/login', {
                errors: {
                    email: {
                        msg: "Este mail no esta registrado"
                    }
                }
            })
        };
        
        return res.redirect('/')
    },

    register: (req, res) => {
        return res.render('./users/register');
    },
    processRegister: (req,res) => {
       const resultValidation =  validationResult(req);
       if(resultValidation.errors.length > 0){
           return res.render('./users/register',{ errors: resultValidation.mapped(),
            oldData: req.body
        });
       };

       let newUsers = {
     // ...req.body = todo lo que trajo el body del request
           ...req.body,
           password: bcryptjs.hashSync(req.body.password, 10)
       };

       let existingUser = userModel.findByField("email", req.body.email);

       if (existingUser){
           return res.render ('./users/register', {
               errors: {
                   email: {
                       msg: "Este mail esta en uso"
                   }
               }, oldData: req.body
           })
       };

       userModel.create(newUsers);
       return res.redirect('/');
    }

};

module.exports = usersController;