const mongoose = require('mongoose');

const aventuraSchema = new mongoose.Schema({
    idAventura: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Aventura', aventuraSchema);
