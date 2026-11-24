const express = require('express');
const speakersController = require('../controllers/speakers.controller');
const validateSpeaker = require('../middlewares/speakers.validator');

const router = express.Router();

router.get('/', speakersController.list);
router.get('/:id', speakersController.getById);

// EVH-38: Registrar ponente con validaciones
router.post('/', validateSpeaker, speakersController.create);

router.put('/:id', speakersController.replace);
router.delete('/:id', speakersController.remove);

module.exports = router;