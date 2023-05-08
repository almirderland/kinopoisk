const express = require('express');
const router = express.Router();
const {getAllContries} = require('./controller');
const writeDataCountry = require('./seed')

router.get('/api/country', getAllContries);
writeDataCountry()

module.exports = router;
