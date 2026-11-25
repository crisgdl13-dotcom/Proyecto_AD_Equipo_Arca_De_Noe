const ApiError = require('../utils/ApiError');
const { speakers } = require('../data/store');

function listSpeakers() {
  return speakers;
}

function getSpeakerById(id) {
  const speaker = speakers.find((s) => s.id === id);
  if (!speaker) {
    throw new ApiError(404, 'NOT_FOUND', `El ponente ${id} no existe`);
  }
  return speaker;
}

function createSpeaker(data) {
  throw new ApiError(501, 'NOT_IMPLEMENTED', 'Endpoint POST /api/v1/speakers no implementado');
}

function replaceSpeaker(id, data) {
  const index = speakers.findIndex((s) => s.id === id);
  if (index === -1) {
    throw new ApiError(404, 'NOT_FOUND', `El ponente ${id} no existe`);
  }

  const body = data || {};
  const campos = ['nombre', 'email', 'institucion', 'especialidad'];
  for (const campo of campos) {
    if (typeof body[campo] !== 'string' || body[campo].trim() === '') {
      throw new ApiError(400, 'BAD_REQUEST', `El campo ${campo} es obligatorio y debe ser texto`);
    }
  }

  const email = body.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new ApiError(400, 'BAD_REQUEST', 'El campo email no es válido');
  }

  const emailRepetido = speakers.some(
    (s) => s.id !== id && (s.email || '').toLowerCase() === email.toLowerCase()
  );
  if (emailRepetido) {
    throw new ApiError(409, 'CONFLICT', 'Ese email ya pertenece a otro ponente');
  }

  const actualizado = {
    id,
    nombre: body.nombre.trim(),
    email,
    institucion: body.institucion.trim(),
    especialidad: body.especialidad.trim(),
  };
  speakers[index] = actualizado;
  return actualizado;
}

function deleteSpeaker(id) {
  const index = speakers.findIndex(speaker => speaker.id === id);
  
  if (index === -1) {
    throw new ApiError(404, 'NOT_FOUND', 'El ponente no existe');
  }

  speakers.splice(index, 1);
  
  return true;
}

module.exports = {
  listSpeakers,
  getSpeakerById,
  createSpeaker,
  replaceSpeaker,
  deleteSpeaker
};