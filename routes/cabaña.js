const express = require("express");
const cabañaSchema = require("../models/cabaña")
const router = express.Router();

//añadir cabaña
router.post("/users", (req, res) => {
  const user = cabañaSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

router.get("/users", (req, res) => {
  cabañaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});


router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  cabañaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

router.put("/users/:id", (req, res) => {
 const {id} = req.params;
 const{idCabaña,descripcion,precio}=req.body;
 cabañaSchema
    .updateOne({_id:id},{$set:{idCabaña,descripcion,precio}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

router.delete("/users/:id", (req, res) => {
  cabañaSchema.findByIdAndRemove(req.params.id,{new:true})
     .then((data) => res.json(data))
     .catch((error) => res.json({ message: error }))
 });
module.exports = router;