const UserController = require('../controllers/user-controller');
const express = require('express');
const router = express.Router();

router.get('/users', UserController.findAllUsers);
router.get('/users/:id', UserController.findOneSingleUser);
router.put('/users/:id', UserController.updateExistingUser);
router.post('/users', UserController.createNewUser);
router.delete('/users/:id', UserController.deleteAnExistingUser);

module.exports = router;