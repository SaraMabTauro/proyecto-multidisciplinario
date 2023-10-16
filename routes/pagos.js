const express = require('express');
const router = express.Router();
const Pagos = require('../models/pagos');
const { getAllPagos, addPagos, editPagos, replaceOnePago, deletePagos }  = require('../controllers/pagosControllers')

router.get('/', getAllPagos );

router.post('/crear', addPagos);

router.put('/:id', editPagos)

router.put('/remplazar/:id', replaceOnePago)

router.delete('/:id', deletePagos)

module.exports = router;