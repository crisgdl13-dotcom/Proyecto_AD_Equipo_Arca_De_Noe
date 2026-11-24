const ApiError = require('../utils/ApiError');
const { randomUUID } = require('node:crypto');
const speakers = require('../data/speakers.data');

function listSpeakers() {
  throw new ApiError(501, 'Endpoint GET /api/v1/speakers no implementado', 'NOT_IMPLEMENTED');
}

function getSpeakerById() {
  throw new ApiError(501, 'Endpoint GET /api/v1/speakers/:id no implementado', 'NOT_IMPLEMENTED');
}

// EVH-38: Crear un nuevo ponente
function createSpeaker(data) {

  const email = data.email.trim().toLowerCase();

  // Verificar si el correo ya existe
  const existe = speakers.some(
    speaker => speaker.email.trim().toLowerCase() === email
  );

  if (existe) {
    throw new ApiError(
      409,
      'EMAIL_ALREADY_EXISTS',
      'El correo electronico ya esta registrado'
    );
  }

  // Crear nuevo ponente
  const nuevoPonente = {
    id: randomUUID(),
    nombre: data.nombre.trim(),
    email: email,
    institucion: data.institucion.trim(),
    especialidad: data.especialidad.trim()
  };

  // Guardar ponente en memoria
  speakers.push(nuevoPonente);

  return nuevoPonente;
}

function replaceSpeaker() {
  throw new ApiError(501, 'Endpoint PUT /api/v1/speakers/:id no implementado', 'NOT_IMPLEMENTED');
}

function deleteSpeaker() {
  throw new ApiError(501, 'Endpoint DELETE /api/v1/speakers/:id no implementado', 'NOT_IMPLEMENTED');
}

module.exports = {
  listSpeakers,
  getSpeakerById,
  createSpeaker,
  replaceSpeaker,
  deleteSpeaker
};