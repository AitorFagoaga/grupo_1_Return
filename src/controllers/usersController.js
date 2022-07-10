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
       console.log(usuario);
    if (usuario){
        let usuarioLogeado = req.session.userLogged = usuario
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
       const modelo = {
        name: req.body.name,
        imagen : req.file.filename,
        category: req.body.category,
        email: req.body.email,
        password: req.body.password,
       }
       userModel.create(modelo);
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
       userModel.create(req.body);
       return res.redirect('/');
    },
    profile: (req,res) => {
        return res.render('profile',{
            user: req.session.userLogged
        })
    }
};
module.exports = usersController;