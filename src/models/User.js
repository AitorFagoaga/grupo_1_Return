const fs = require('fs');
const path = require('path');
const archivoRuta= path.join(__dirname, '../data/users.json');


const User = {
    getData: function () {
		return JSON.parse(fs.readFileSync(archivoRuta, 'utf-8'));
	},
    //encontrar a todos los usuarios
    findAllUsers: function () {
        return this.getData();
    },
    //buscar usuario por id ( pk = private key )
    findByPk: function (id)  {
        let allUsers = this.findAllUsers();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    }, 
    //buscar usuario por campo (ejemplo: field: (name o email) value:(aitor o aitor@mail.com) )
    findByField: function (field,value) {
        let allUsers = this.findAllUsers();
        let userFound = allUsers.find(oneUser => oneUser[field] === value);
        return userFound;
    }, 
    //generar un id para el usuario
    generateId: function () {
        let allUsers = this.findAllUsers();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },
    //guardar el usuario
    create: function (userData) {
        let allUsers = this.findAllUsers();
        let newUser = {
            id: this.generateId(),
            ...userData
        }

        allUsers.push(newUser);
        fs.writeFileSync(archivoRuta, JSON.stringify(allUsers, null,  ' '));
        return newUser;
    },
    //borrar usuario
    delete: function (id){
        let allUsers = this.findAllUsers();
        let usersAfterDelete = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(archivoRuta, JSON.stringify(usersAfterDelete, null,  ' '));
    }
}


module.exports = User;