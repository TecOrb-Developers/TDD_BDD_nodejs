const express = require('express');
const AuthController = require('../../controllers/api/AuthController');
const router = express.Router();

router.post('/login',AuthController.login)

module.exports = router;