const usuarioEsquema = require('../models/cliente-usuario');

const getAllUsers = (req, res) => {

      usuarioEsquema.find({})
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }))

}

const addUsers = (req, res) => {

      const nuevoDocumento = new usuarioEsquema(req.body);

      nuevoDocumento.save()
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));

}

const updateUser = (req, res) => {

      usuarioEsquema.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));

}

const replaceUser =  (req, res) => {

      const id = req.params.id;
      
      const newData = req.body;

      usuarioEsquema.replaceOne({ _id: id }, newData)
            .then(result => {

                  if (result.modifiedCount === 1) {

                        res.json({message : "usuario actualizado correctamente"})

                  } else {

                        res.status(404).json({ message: 'Usuario no encontrado'});
                  }

            })

            .catch(err => res.status(400).json({ error: err.message }));

}

const deleteUser = (req, res) => {

      console.log(req.params.id)

      usuarioEsquema.findByIdAndRemove(req.params.id, { new: true })
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));


}

module.exports = {
      getAllUsers,
      addUsers,
      updateUser,
      replaceUser,
      deleteUser
}