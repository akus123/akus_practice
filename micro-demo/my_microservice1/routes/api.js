var express = require('express');
var router = express.Router();

/* GET greeting microservice1 */
router.get('/sayhellomicro1', function(req, res, next) {
  res.send('hello microservice1');
});

module.exports = router;
