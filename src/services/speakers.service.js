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
  throw new ApiError(501, 'NOT_IMPLEMENTED', 'Endpoint PUT /api/v1/speakers/:id no implementado');
}

function deleteSpeaker(id) {
  throw new ApiError(501, 'NOT_IMPLEMENTED', 'Endpoint DELETE /api/v1/speakers/:id no implementado');
}

module.exports = {
  listSpeakers,
  getSpeakerById,
  createSpeaker,
  replaceSpeaker,
  deleteSpeaker
};