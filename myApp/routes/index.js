var express = require('express');
var router = express.Router();

let indexController = require ('../controllers/indexController')

router.get('/', indexController.bienvenida);
router.get('/creditos', indexController.creditos);

module.exports = router;
