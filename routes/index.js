var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('table');
});

router.get('/insert', function(req, res, next) {
    res.render('index')
});

module.exports = router;