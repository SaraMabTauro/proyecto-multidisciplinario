const Pagos = require('../models/pagos');

const getAllPagos = (req, res) => {

      Pagos.find({})
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }))

}

const addPagos = (req, res) => {

      const nuevoDocumento = new Pagos(req.body);

      nuevoDocumento.save()
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));

}

const editPagos = (req, res) => {

      Pagos.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));

}

const replaceOnePago = (req, res) => {

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

}

const deletePagos = (req, res) => {

      console.log(req.params.id)

      Pagos.findByIdAndRemove(req.params.id, { new: true })
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));


}

module.exports = {

      getAllPagos,
      addPagos,
      editPagos,
      replaceOnePago,
      deletePagos

}