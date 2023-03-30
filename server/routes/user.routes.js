const express = require('express');
const router = express.Router();
const users = require('../controllers//user.controller');

router.get('/', users.getAll);
router.get('/:phone', users.getByPhone);
router.post('/', users.add);

module.exports = router;