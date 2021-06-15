var express = require('express');
var router = express.Router();
var Request = require('../models/request');

router.get('/', function(req, res, next) {
  res.status(200).json([
    {name: 'julia.vavrinyuk', request: 'VPN', description: 'System not connecting'}
  ]);
});

router.post('/', function(req, res) {
  Request.create(req.body, function(err, request) {
    res.status(201).json(request);
  });
});

module.exports = router;
