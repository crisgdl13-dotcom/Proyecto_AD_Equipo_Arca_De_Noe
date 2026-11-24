const ApiError = require('../utils/ApiError');

function listSpeakers() {
  throw new ApiError(501, 'NOT_IMPLEMENTED', 'Endpoint GET /api/v1/speakers no implementado');
}

function getSpeakerById(id) {
  throw new ApiError(501, 'NOT_IMPLEMENTED', 'Endpoint GET /api/v1/speakers/:id no implementado');
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