const userData = require('../db/context');

class UserService {

    getAllUser() {
	return userData;
    }

    getIndex(id) {
	return userData.findIndex((data) => {
	    return data.id.toString() === id.toString()
	});
    }

    getUserById(id) {
	let index = this.getIndex(id);

	return userData[index];
    }

    createUser(data) {
	userData.push(data);

	return "Usuario creado";
    }

    updateUserById(id, data) {
	let index = this.getIndex(id);

	userData[index].userName = data.userName;
	userData[index].name  = data.name;
	userData[index].email = data.email;
	userData[index].createDate = data.createDate;
	userData[index].password = data.password;

	return "Usuario actualizado";
    }
}

module.exports = new UserService();
