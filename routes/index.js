var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("request headers", req.headers)
  res.render('index', { title: 'Ben Medcalf gets certified', header: JSON.stringify(req.headers) });
});

module.exports = router;
