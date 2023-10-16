const mongoose = require('mongoose')

const usuarioEsquema = mongoose.Schema({

      name :  {
            type : String,
            require : true
      }, 

      apellidos : {

            type : String,
            require : true

      },

      numero_telefono : {

            type : Number,
            require : true

      },

      email : {

            type : String,
            require : true
      },

      foto_de_perfil : {

            type : String,

      },

      usuario : {

            type : String
      }, 

      contraseña : {

            type : String
      }


}, {
      versionKey : false
})

module.exports = mongoose.model('usuario', usuarioEsquema)