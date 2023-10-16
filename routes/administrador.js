const express = require("express");
const adminstradorSchema = require("../models/administrador")
const { postAdmin, getAdmin, findOneAdmin, updateAdmin, deleteAdmin } = require('../controllers/adminControllers')
const router = express.Router();

router.post("/admin", postAdmin);

router.get("/admin", getAdmin);

router.get("/admin/:id", findOneAdmin);

router.put("/admin/:id", updateAdmin);

router.delete("/admin/:id", deleteAdmin);

module.exports = router;
