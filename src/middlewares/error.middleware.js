const ApiError = require('../utils/ApiError');

// Middleware central de errores (4 argumentos: Express lo reconoce por eso).
// Formato estándar: { error: { status, code, message, timestamp } }
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  // express.json() lanza este error cuando el body no es un JSON válido.
  if (err && err.type === 'entity.parse.failed') {
    err = new ApiError(400, 'BAD_REQUEST', 'El cuerpo de la petición no es un JSON válido');
  }

  const status = Number.isInteger(err && err.status) ? err.status : 500;
  const isInternal = status === 500;

  if (status >= 500) {
    // El detalle real se queda en el log del servidor.
    console.error(err);
  }

  // Solo el 500 esconde detalles. El 501 (no implementado) sí se muestra.
  const code = isInternal
    ? 'INTERNAL_SERVER_ERROR'
    : (err.code || 'BAD_REQUEST');
  const message = isInternal ? 'Error interno del servidor' : err.message;

  res.status(status).json({
    error: {
      status,
      code,
      message,
      timestamp: (err && err.timestamp) || new Date().toISOString()
    }
  });
}

module.exports = errorHandler;