var express = require('express');
var router = express.Router();

/* GET greetings */
router.get('/sayhello', function(req, res, next) {
  res.send('hello micro-service');
});

module.exports = router;
