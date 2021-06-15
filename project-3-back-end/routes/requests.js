var express = require('express');
var router = express.Router();
var Request = require('../models/request');

router.get('/', function(req, res, next) {
  Request.find({}, function(err, requests) {
    res.status(200).json(requests);
  });
});

router.post('/', function(req, res) {
  Request.create(req.body, function(err, request) {
    res.status(201).json(request);
  });
});

module.exports = router;