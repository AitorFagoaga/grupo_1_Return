const { validationResult } = require('express-validator');
const userModel = require('../models/User');
const path = require('path');
const fs = require('fs');
const archivoRuta = path.join(__dirname, '../data/users.json');
const bcryptjs = require('bcryptjs');



const usersController = {



    login: (req, res) => {
        return res.render('./users/login');
    },
    processLogin: (req, res) => {
        let usuario = userModel.findByField('email', req.body.email);
    if (usuario){

        let comparePassword = bcryptjs.compareSync(req.body.password, usuario.password)
        if(comparePassword == true){
            req.session.userLogged = usuario;   
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
       return res.redirect('./profile');
    },
    profile: (req,res) => {
        console.log("estas en profile");
        return res.render('./users/profile',{

            user: req.session.userLogged
        })
    }
};
module.exports = usersController;