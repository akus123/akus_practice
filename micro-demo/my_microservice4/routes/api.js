var express = require('express');
var router = express.Router();

/* GET greeting microservice4 */
router.get('/sayhellomicro4', function(req, res, next) {
  res.send('hello microservice4');
});

module.exports = router;
