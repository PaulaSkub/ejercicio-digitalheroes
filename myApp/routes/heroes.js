var express = require('express');
var router = express.Router();

router.get('/heroes', function(req, res) {
  res.render('heroes',{});
});

module.exports = router;
