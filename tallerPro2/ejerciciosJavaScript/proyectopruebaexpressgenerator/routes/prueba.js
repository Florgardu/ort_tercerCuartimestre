let express = require('express');
let router = express.Router();

/* GET saludo */
router.get('/', function(req, res, next) {
    res.send('prueba 123');
  });

  router.get('/saludar', function(req, res, next) {
    res.send('Hola! cómo estás?');
  });

module.exports = router;
