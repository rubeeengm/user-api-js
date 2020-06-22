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
}

module.exports = new UserService();
