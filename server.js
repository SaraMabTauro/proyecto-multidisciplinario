const express = require('express');
const moogoose = require('mongoose');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/multidisciplinario', {  useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('No se pudo conectar a MongoDB', err));
    
//Importar y usar las rutas mongodb://localhost:27017/
const administradorRoutes = require('./routes/administrador');
const comentarioRoutes = require('./routes/comentarios');
const aventuraRoutes = require('./routes/aventura');
const cabañaRoutes=require('./routes/cabaña')

app.use('/api', administradorRoutes);   
//app.use('/comentario', comentarioRoutes);
//app.use('/aventura',aventuraRoutes);
app.use('/api',cabañaRoutes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
});