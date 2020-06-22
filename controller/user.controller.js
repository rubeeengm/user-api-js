var userService = require('../services/user.service');

class UserController {

    async getAllUser(req, res) {
	await res.json(
	    userService.getAllUser()
	);
    }

    async getUserById(req, res) {
	await res.json(
	    userService.getUserById(
		req.params.id
	    )
	);
    }

    async createUser(req, res) {
	await res.json(
	    userService.createUser(
	    	req.body
	    )
	);
    }

    async updateUserById(req, res) {
	await res.json(
	    userService.updateUserById(
		req.params.id, req.body
	    )
	);
    }
}

module.exports = new UserController();
