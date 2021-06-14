var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json([
    {request: 'VPN', description: 'System not connecting'},
    {request: 'Mitel SoftPhone', description: 'Clients cannot hear me, but I can hear them'},
    {request: 'Login Access', description: 'Cannot log into salesforce or CAM'},
    {request: 'Payroll', description: 'Cannot submit PTO request'},
  ]);
});

module.exports = router;
