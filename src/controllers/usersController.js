const { validationResult } = require('express-validator');
const userModel = require('../models/User');

const usersController = {

    login: (req, res) => {
        return res.render('./users/login');
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
       userModel.create(req.body);
       return res.redirect('/');
    }

};

module.exports = usersController;