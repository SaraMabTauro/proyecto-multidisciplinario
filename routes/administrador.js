const express = require("express");
const adminstradorSchema = require("../models/administrador")
const router = express.Router();

//añadir cabaña
router.post("/admin", (req, res) => {
    const admin = adminstradorSchema(req.body);
    admin
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

router.get("/admin", (req, res) => {
    adminstradorSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});


router.get("/admin/:id", (req, res) => {
    const { id } = req.params;
    adminstradorSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

router.put("/admin/:id", (req, res) => {
    const { id } = req.params;
    const { idAdmin, nombre, apellido_paterno, apellido_materno, email, nombreDeUsuario, password } = req.body;
    adminstradorSchema
        .updateOne({ _id: id }, { $set: { idAdmin, nombre, apellido_paterno, apellido_materno, email, nombreDeUsuario, password } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

router.delete("/admin/:id", (req, res) => {
    adminstradorSchema.findByIdAndRemove(req.params.id, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});
module.exports = router;
