const express = require('express');
const router = express.Router();

const usersControlle = require('../controllers/users_controller');
router.get('/profile',usersControlle.profile);

module.exports = router;