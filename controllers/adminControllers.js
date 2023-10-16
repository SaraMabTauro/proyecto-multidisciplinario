const adminstradorSchema = require("../models/administrador")

const postAdmin = (req, res) => {
      const admin = adminstradorSchema(req.body);
      admin
          .save()
          .then((data) => res.json(data))
          .catch((error) => res.json({ message: error }))
}

const getAdmin = (req, res) => {
      adminstradorSchema
          .find()
          .then((data) => res.json(data))
          .catch((error) => res.json({ message: error }))
}

const findOneAdmin = (req, res) => {
      const { id } = req.params;
      adminstradorSchema
          .findById(id)
          .then((data) => res.json(data))
          .catch((error) => res.json({ message: error }))
}

const updateAdmin = (req, res) => {
      const { id } = req.params;
      const { idAdmin, nombre, apellido_paterno, apellido_materno, email, nombreDeUsuario, password } = req.body;
      adminstradorSchema
          .updateOne({ _id: id }, { $set: { idAdmin, nombre, apellido_paterno, apellido_materno, email, nombreDeUsuario, password } })
          .then((data) => res.json(data))
          .catch((error) => res.json({ message: error }))
}

const deleteAdmin = (req, res) => {
      adminstradorSchema.findByIdAndRemove(req.params.id, { new: true })
          .then((data) => res.json(data))
          .catch((error) => res.json({ message: error }))
  }


module.exports = {

      postAdmin,
      getAdmin,
      findOneAdmin,
      updateAdmin,
      deleteAdmin
}