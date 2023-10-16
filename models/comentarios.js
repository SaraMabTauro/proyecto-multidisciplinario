const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
    id_comentario: {
        type: Number,
        required: true,
        unique: true
    },

    id_usuario: {
        type: mongoose.Schema.ObjectId,
        required: true
    },

    comentario: {
        type: String,
        required: true
    },

    fecha: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comentario', comentarioSchema);
