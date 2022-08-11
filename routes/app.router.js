const express = require('express');
const { getHome } = require('../controllers/app.controller');
const router = express.Router();

router.get('/', getHome);

module.exports = router;
