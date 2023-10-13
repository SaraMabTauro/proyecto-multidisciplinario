const express = require('express');
const router = express.Router();
const Aventura = require('../models/aventura');

router.get('/aventura', (req, res) => {
    Aventura.find()
        .then(aventuras => res.json(aventuras))
        .catch(err => res.status(400).json({ error: err.message }));
});

router.get('/:id', (req, res) => {
    const aventuraId = req.params.id;

    Aventura.findById(aventuraId)
        .then(aventura => {
            if (!aventura) {
                return res.status(404).json({ message: 'Servicio de aventura no encontrado' });
            }
            res.json(aventura);
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

router.post('/nuevaAventura', (req, res) => {
    const { idAventura, nombre, descripcion, precio } = req.body;

    const nuevaAventura = new Aventura({
        idAventura,
        nombre,
        descripcion,
        precio
    });

    nuevaAventura.save()
        .then(aventuraGuardada => res.json(aventuraGuardada))
        .catch(err => res.status(400).json({ error: err.message }));
});

router.put('/actualizarAventura/:id', (req, res) => {
    const aventuraId = req.params.id;
    const updatedAventura = req.body;

    Aventura.findByIdAndUpdate(aventuraId, updatedAventura, { new: true })
        .then(updated => res.json(updated))
        .catch(err => res.status(400).json({ error: err.message }));
});

router.delete('/eliminarAventura/:id', (req, res) => {
    const aventuraId = req.params.id;

    Aventura.findByIdAndDelete(aventuraId)
        .then(() => res.json({ message: 'Servicio de aventura eliminado correctamente' }))
        .catch(err => res.status(400).json({ error: err.message }));
});

module.exports = router;
