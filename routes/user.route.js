const express = require('express');

const userController = require('../controller/user.controller');

const router = express.Router();

router.get('/', userController.getAllUser);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;
