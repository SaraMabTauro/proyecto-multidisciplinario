      const mongoose = require('mongoose');

const reservaAventuraEsquema = mongoose.Schema({

      fecha : {

            type: Date,
            default : Date.now,
            require : true
      }, 

      id_aventura : {

            type : mongoose.Schema.ObjectId,
            require : true
      },

      id_usuario : {

            type : mongoose.Schema.ObjectId,
            require : true

      },

      id_pago : {

            type : mongoose.Schema.ObjectId,
            require : true

      }

}, {versionKey : false})

module.exports = mongoose.model('reservas-aventuras', reservaAventuraEsquema)

