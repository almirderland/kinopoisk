const express = require('express');
const router = express.Router();
const {signUp} = require('./controller')

router.post('/api/singup', signUp)

module.exports = router
