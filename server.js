const express = require('express');
const moogoose = require('mongoose');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/multidisciplinario', {useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('No se pudo conectar a MongoDB', err));
    
//Importar y usar las rutas mongodb://localhost:27017/
const administradorRoutes = require('./routes/administrador');
const comentarioRoutes = require('./routes/comentarios');
const aventuraRoutes = require('./routes/aventura');
const usuarioRoutes = require('./routes/cliente-usuario')
const pagosRoutes = require('./routes/pagos')
const reservaAventura = require('./routes/reservas-aventura')
const reservaCabaña = require('./routes/reservas-cabañas')
const cabañaRoutes = require('./routes/cabaña')

app.use('/administrador', administradorRoutes);   
app.use('/comentario', comentarioRoutes);
app.use('/aventura',aventuraRoutes);
app.use('/usuario', usuarioRoutes)
app.use('/pagos', pagosRoutes);
app.use('/reservas/aventuras', reservaAventura)
app.use('/reservas/cabanas', reservaCabaña)
app.use('/cabaña', cabañaRoutes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
});