require('dotenv').config();
const express = require('express');
const speakersRoutes = require('./routes/speakers.routes');
const { health } = require('./controllers/health.controller'); 
const logger = require('./middlewares/logger');               
const notFound = require('./middlewares/notFound');           
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use(logger);
app.get('/api/v1/health', health);
app.use('/api/v1/speakers', speakersRoutes);
app.use(notFound);
app.use(errorMiddleware);
module.exports = app;