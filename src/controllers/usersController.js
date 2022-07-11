const { validationResult } = require('express-validator');
const userModel = require('../models/User');
const path = require('path');
const fs = require('fs');
const archivoRuta = path.join(__dirname, '../data/users.json');
const bcryptjs = require('bcryptjs');
const cookie = require('cookie-parser')


const usersController = {



    login: (req, res) => {
        return res.render('./users/login');
    },
    processLogin: (req, res) => {
        
        let usuario = userModel.findByField('email', req.body.email);
        if (usuario){
        //let usuarioLogeado = req.session.userLogged = usuario
        let comparePassword = bcryptjs.compareSync(req.body.password, usuario.password)
        if(comparePassword == true){
            //borro password del usuario por seguridad
            delete usuario.password;
            req.session.userLogged = usuario;

            if(req.body.recordar){

               res.cookie('coockieEmail', req.body.email, { maxAge: (1000 * 60) * 5});
                
            }
            return res.redirect('./profile')
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
           password: bcryptjs.hashSync(req.body.password, 10),
           image: req.file.filename
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
       return res.redirect('./profile');
    },
    profile: (req,res) => {

        return res.render('./users/profile',{

            user: req.session.userLogged
        })
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    }
};
module.exports = usersController;