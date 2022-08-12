const express = require('express');
const { getHome, notFound } = require('../controllers/app.controller');
const router = express.Router();

router.get('/', getHome);
// this should be last
router.all('*', notFound);

module.exports = router;
