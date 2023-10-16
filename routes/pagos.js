const express = require('express');
const router = express.Router();
const Pagos = require('../models/pagos');

router.get('/', (req, res) => {

      Pagos.find({})
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }))

});

router.post('/crear', (req, res) => {

      const nuevoDocumento = new Pagos(req.body);

      nuevoDocumento.save()
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));

})

router.put('/:id', (req, res) => {

      Pagos.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));

})

router.put('/remplazar/:id', (req, res) => {

      const id = req.params.id;
      console.log(typeof id)
      const newData = req.body;

      Pagos.replaceOne({ _id: id }, newData)
            .then(result => {

                  if (result.modifiedCount === 1) {

                        res.json({message : "Documento actualizado correctamente"})

                  } else {

                        res.status(404).json({ message: 'Documento no encontrado'});
                  }

            })

            .catch(err => res.status(400).json({ error: err.message }));

})

router.delete('/:id', (req, res) => {

      console.log(req.params.id)

      Pagos.findByIdAndRemove(req.params.id, { new: true })
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));


})

module.exports = router;