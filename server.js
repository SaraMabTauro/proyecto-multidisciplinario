const express = require('express');
const moogoose = require('mongoose');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/multidisciplinario', { usenNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('No se pudo conectar a MongoDB', err));
    
//Importar y usar las rutas
const administradorRoutes = require('./routes/administrador');

app.use('/administrador', administradorRoutes);   

app.listen(PORT, () => {
    console.log('Servidor corriendo en puerto ${PORT}')
});