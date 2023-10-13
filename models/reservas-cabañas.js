const mongoose = require('mongoose');

const reservaCabaña = mongoose.Schema({

      dias_reservacion : {

            type: Number,
            require: true

      },

      id_cliente : {

            type: mongoose.Schema.ObjectId,
            require : true

      },

      id_cabaña : {

            type: mongoose.Schema.ObjectId,
            require : true

      },

      id_pago : {

            type: mongoose.Schema.ObjectId,
            require : true

      }

}, {
      versionKey : false
})

module.exports = mongoose.model('reservas-cabañas', reservaCabaña)