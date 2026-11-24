require('dotenv').config();
const express = require('express');
const speakersRoutes = require('./routes/speakers.routes');

// Importar middlewares
const logger = require('./middlewares/logger'); 
const notFound = require('./middlewares/notFound'); 
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

// 1. Middleware para parsear JSON
app.use(express.json());

// 2. EVH-28: Middleware de logging
app.use(logger);

// 3. Rutas
app.use('/api/v1/speakers', speakersRoutes);

// 4. EVH-29: Middleware 404 (Si llega aquí, es porque no coincidió con ninguna ruta)
app.use(notFound);

// 5. Middleware centralizado de errores
app.use(errorMiddleware);


module.exports = app;