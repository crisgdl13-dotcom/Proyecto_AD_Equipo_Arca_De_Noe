const ApiError = require('../utils/ApiError');

function listSpeakers() {
  throw new ApiError(501, 'Endpoint GET /api/v1/speakers no implementado', 'NOT_IMPLEMENTED');
}

function getSpeakerById() {
  throw new ApiError(501, 'Endpoint GET /api/v1/speakers/:id no implementado', 'NOT_IMPLEMENTED');
}

function createSpeaker() {
  throw new ApiError(501, 'Endpoint POST /api/v1/speakers no implementado', 'NOT_IMPLEMENTED');
}

function replaceSpeaker() {
  throw new ApiError(501, 'Endpoint PUT /api/v1/speakers/:id no implementado', 'NOT_IMPLEMENTED');
}

function deleteSpeaker(id) {
 const index = store.speakers.findIndex(speaker => speaker.id === id);
 if (index === -1) {
    throw new ApiError(404, 'NOT_FOUND', 'El ponente no existe');
  }
  store.speakers.splice(index, 1);
  
  return true;
}

module.exports = {
  listSpeakers,
  getSpeakerById,
  createSpeaker,
  replaceSpeaker,
  deleteSpeaker
};