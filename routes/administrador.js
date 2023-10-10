const express = require('express');
const router = express.Router();
const administrador = require('../models/administrador');



router.get('/', (req, res) => {
    administrador.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json({ error: err.message}));
});


module.exports = router;