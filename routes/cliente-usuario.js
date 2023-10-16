const express = require('express');
const router = express.Router();
const usuarioEsquema = require('../models/cliente-usuario');
const {getAllUsers, addUsers, updateUser, replaceUser, deleteUser} = require('../controllers/userControllers')

router.get('/', getAllUsers);

router.post('/crear', addUsers);

router.put('/:id', updateUser);

router.put('/remplazar/:id', replaceUser);

router.delete('/:id', deleteUser);

module.exports = router;