const mongoose = require('mongoose');

const pagosEsquema = new mongoose.Schema({

      numero_transaccion : {

            type: String,
            unique : true

      },

      monto : {

            type : Number,
            require : true,
            
      },

      fecha : {

            type : Date,
            default : Date.now,
            require : true
      }

}, {
      versionKey : false
})

module.exports = mongoose.model('pagos', pagosEsquema);