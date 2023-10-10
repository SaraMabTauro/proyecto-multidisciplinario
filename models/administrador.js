const mongoose = require('mongoose');

const administradoEsquema = new mongoose.Schema({
    idAdministador:{
        type: String,
        required: true,
        unique : true
    },

    nombre:{
        type: String,
        required: true
    },

    apellidos: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    usuario: {
        type: String,
        required: true,
        unique: true
    },

    contraseña: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Administrador', administradoEsquema);
