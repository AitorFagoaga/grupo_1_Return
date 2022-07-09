const { validationResult } = require('express-validator');
const userModel = require('../models/User');
<<<<<<< HEAD
<<<<<<< HEAD
const path = require('path');
const fs = require('fs');
const archivoRuta = path.join(__dirname, '../data/users.json');

=======
const bcryptjs = require('bcryptjs'); 
>>>>>>> 3666df8a2f866a2fd6f50c41c4b0d73dea355f29
=======
>>>>>>> parent of 7b93b49... Rutas de usuarios(commit5)

const usersController = {

    login: (req, res) => {
        return res.render('./users/login');
    },
    processLogin: (req, res) => {
        let usuario = userModel.findByField('email', req.body.email);
<<<<<<< HEAD
<<<<<<< HEAD

       // let usuarioLogeado = req.cookies.userLogged;

       console.log(usuario);

        if(usuario){

            return res.render("./usersLogin", {database:database})

        }
        return res.send('credenciales invalidas')
=======
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
>>>>>>> 3666df8a2f866a2fd6f50c41c4b0d73dea355f29
=======
        let usuarioLogeado = req.cookies.userLogged = usuario;
        console.log(usuarioLogeado)
        return res.redirect('/')
>>>>>>> parent of 7b93b49... Rutas de usuarios(commit5)
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
<<<<<<< HEAD
<<<<<<< HEAD
       const modelo = {
        name: req.body.name,
        imagen : req.file.filename,
        category: req.body.category,
        email: req.body.email,
        password: req.body.password,
       }

       userModel.create(modelo);

=======

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
>>>>>>> 3666df8a2f866a2fd6f50c41c4b0d73dea355f29
=======
       userModel.create(req.body);
>>>>>>> parent of 7b93b49... Rutas de usuarios(commit5)
       return res.redirect('/');
    }

};

module.exports = usersController;