const { validationResult } = require('express-validator');
const userModel = require('../models/User');
const path = require('path');
const fs = require('fs');
const archivoRuta = path.join(__dirname, '../data/users.json');


const usersController = {

    login: (req, res) => {

        return res.render('./users/login');

    },
    usuarioRegistrado : (req,res) => {

    },
    processLogin: (req, res) => {
        const database = JSON.parse(fs.readFileSync(archivoRuta, 'utf-8'));
        let usuario = userModel.findByField('email', req.body.email);

       // let usuarioLogeado = req.cookies.userLogged;

       console.log(usuario);

        if(usuario){

            return res.render("./usersLogin", {database:database})

        }
        return res.send('credenciales invalidas')
    },

    register: (req, res) => {
        return res.render('./users/register');
    },
    processRegister: (req,res) => {
       const resultValidation =  validationResult(req);
       if(resultValidation.errors.length > 0){
           return res.render('./users/register',{ errors: resultValidation.mapped(), oldData: req.body
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

       return res.redirect('/');
    }

};

module.exports = usersController;