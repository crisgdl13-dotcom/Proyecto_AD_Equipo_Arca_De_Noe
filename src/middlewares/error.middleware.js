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

  const isApiError = err instanceof ApiError;
  const status = Number.isInteger(err && err.status) ? err.status : 500;
  const isServerError = status >= 500;

  if (isServerError) {
    // El detalle real se queda en el log del servidor, no se envía al cliente.
    console.error(err);
  }

  const code = isServerError
    ? 'INTERNAL_SERVER_ERROR'
    : (err.code || (isApiError ? 'ERROR' : 'BAD_REQUEST'));
  const message = isServerError ? 'Error interno del servidor' : err.message;

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
