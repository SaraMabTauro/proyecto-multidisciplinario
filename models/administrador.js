const mongoose = require("mongoose")

const adminstradorSchema = mongoose.Schema({

    idAdmin: {
        type: Number
    },
    nombre:{
        type:String,
        required:true
    },
    apellido_paterno:{
        type:String,
        required:true
    },
     apellido_materno:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    nombreDeUsuario:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    }
    
    

});

module.exports=mongoose.model('admin',adminstradorSchema);