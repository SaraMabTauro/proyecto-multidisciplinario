const mongoose = require("mongoose")

const cabañaSchema = mongoose.Schema({
    idCabaña: {
        type: Number,
        required: true
    },
    descripcion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    }
    

});

module.exports=mongoose.model('User',cabañaSchema);