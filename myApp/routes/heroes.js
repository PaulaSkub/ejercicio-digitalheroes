var express = require('express');
var router = express.Router();

let heroesController = require('../controllers/heroesController')


router.get('/', heroesController.listado);
router.get('/:id/profesion', heroesController.detalle);
router.get('/:id/resenia/tipo', heroesController.resenia);

module.exports = router;
