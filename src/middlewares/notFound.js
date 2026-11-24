const ApiError = require('../utils/ApiError');

const notFound = (req, res, next) => {
  // Lanza el error 404 con el formato estándar
  next(new ApiError(404, 'NOT_FOUND', `La ruta ${req.originalUrl} no existe`));
};

module.exports = notFound;
