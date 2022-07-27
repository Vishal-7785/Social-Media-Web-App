const express = require('express');
const router = express.Router();

const homeControlle = require('../controllers/home_controller');
console.log('jhb');
router.get('/',homeControlle.home);
module.exports = router;