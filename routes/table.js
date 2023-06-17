var express = require('express');
var router = express.Router();

router.get('/table', function(req, res, next) {
    res.sendFile(__dirname + '/views/table.html');
});

module.exports = router;