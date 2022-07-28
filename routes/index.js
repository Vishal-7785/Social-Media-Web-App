const express = require('express');
const router = express.Router();

const homeControlle = require('../controllers/home_controller');
router.get('/',homeControlle.home);
router.use('/users',require('./users'));
module.exports = router;