const express = require('express');
const passport = require('passport');
const router = express.Router();
const {signUp, singIn} = require('./controller')

router.post('/api/signup', signUp)
router.post('api/signin', passport.authenticate('local', {failureRedirect : '/login?error=1'}), singIn)

module.exports = router
