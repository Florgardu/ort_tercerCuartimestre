let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/ganador', function(req, res, next) {
  res.send('probando 1 2 3');
});

module.exports = router;
