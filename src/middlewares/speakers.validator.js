const ApiError = require('../utils/ApiError');

function validateSpeaker(req, res, next) {

  const { nombre, email, institucion, especialidad } = req.body || {};

  const campos = [nombre, email, institucion, especialidad];

  // Validar campos obligatorios
  if (campos.some(campo =>
    typeof campo !== 'string' || campo.trim() === ''
  )) {
    return next(new ApiError(
      400,
      'MISSING_FIELDS',
      'Todos los campos son obligatorios'
    ));
  }

  // Validar formato del correo
  const formatoEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!formatoEmail.test(email.trim())) {
    return next(new ApiError(
      400,
      'INVALID_EMAIL',
      'El correo electronico no es valido'
    ));
  }

  next();
}

module.exports = validateSpeaker;