const express = require('express');
const router = express.Router();
const { fCalculo } = require('../controller/calculadora');

router.post('/calculadora', fCalculo);

module.exports = router;