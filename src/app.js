require('dotenv').config();
const express = require('express');
const speakersRoutes = require('./routes/speakers.routes');
const { health } = require('./controllers/health.controller');
const errorMiddleware = require('./middlewares/error.middleware');
const ApiError = require('./utils/ApiError');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/v1/health', health);
app.use('/api/v1/speakers', speakersRoutes);

// 404: cualquier ruta que no exista
app.use((req, res, next) => {
  next(new ApiError(404, 'NOT_FOUND', `La ruta ${req.originalUrl} no existe`));
});

// Siempre al final
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;