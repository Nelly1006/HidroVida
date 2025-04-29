const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a HidroVida!' });
});

// Rutas
const guiasRoutes = require('./src/routes/guias');
const usuariosRoutes = require('./src/routes/usuarios');
app.use('/api/guias', guiasRoutes);
app.use('/api/usuarios', usuariosRoutes);

const connectDB = require('./src/config/db');
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});