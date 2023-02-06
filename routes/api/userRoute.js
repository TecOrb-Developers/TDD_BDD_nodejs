const express = require('express');
const UserController = require('../../controllers/api/UserController');
const router = express.Router();

router.get('',UserController.all)
router.post('',UserController.create)

module.exports = router;