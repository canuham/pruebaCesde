'use strict'

let express = require('express');

let projectController = require('../Controllers/ProjectController');

let router = express.Router();

router.get('/home',projectController.home);

router.post('/test',projectController.test);

router.post('/inicio',projectController.inicio);

router.post('/saveProject',projectController.saveProject);

module.exports = router;