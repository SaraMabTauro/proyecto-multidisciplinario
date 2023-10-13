const express = require('express');
const router = express.Router();
const Comentario = require('../models/comentarios');

router.get('/comentarios', (req, res) => {
    Comentario.find()
        .then(comentarios => res.json(comentarios))
        .catch(err => res.status(400).json({ error: err.message }));
});

router.post('/nuevoComentario', (req, res) => {
    const { id_comentario, id_usuario, comentario, fecha } = req.body;

    const nuevoComentario = new Comentario({
        id_comentario,
        id_usuario,
        comentario,
        fecha
    });

    nuevoComentario.save()
        .then(comentarioGuardado => res.json(comentarioGuardado))
        .catch(err => res.status(400).json({ error: err.message }));
});

router.get('/:id', (req, res) => {
    const comentarioId = req.params.id;

    Comentario.findById(comentarioId)
        .then(comentario => {
            if (!comentario) {
                return res.status(404).json({ message: 'Comentario no encontrado' });
            }
            res.json(comentario);
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

router.put('/actualizarComentario/:id', (req, res) => {
    const comentarioId = req.params.id;
    const updatedComentario = req.body;

    Comentario.findByIdAndUpdate(comentarioId, updatedComentario, { new: true })
        .then(updated => res.json(updated))
        .catch(err => res.status(400).json({ error: err.message }));
});

router.delete('/eliminarComentario/:id', (req, res) => {
    const comentarioId = req.params.id;

    Comentario.findByIdAndDelete(comentarioId)
        .then(() => res.json({ message: 'Comentario eliminado correctamente' }))
        .catch(err => res.status(400).json({ error: err.message }));
});

module.exports = router;
