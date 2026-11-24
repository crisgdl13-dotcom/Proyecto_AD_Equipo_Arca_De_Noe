const speakersService = require('../services/speakers.service');

function list(req, res, next) {
  try {
    speakersService.listSpeakers();
  } catch (err) {
    next(err);
  }
}

function getById(req, res, next) {
  try {
    speakersService.getSpeakerById(req.params.id);
  } catch (err) {
    next(err);
  }
}

// EVH-38: Registrar un nuevo ponente
function create(req, res, next) {
  try {
    const nuevoPonente = speakersService.createSpeaker(req.body);

    res
      .location(`/api/v1/speakers/${nuevoPonente.id}`)
      .status(201)
      .json(nuevoPonente);

  } catch (err) {
    next(err);
  }
}

function replace(req, res, next) {
  try {
    speakersService.replaceSpeaker(req.params.id, req.body);
  } catch (err) {
    next(err);
  }
}

function remove(req, res, next) {
  try {
    speakersService.deleteSpeaker(req.params.id);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  list,
  getById,
  create,
  replace,
  remove
};