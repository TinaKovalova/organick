const express = require('express');
const router = express.Router();
const users = require('../controllers//user.controller');

router.get('/', users.getAll);
router.get('/:id', users.getById);
router.delete('/:id', users.remove);
router.put('/:id', users.update);
router.post('/', users.add);

module.exports = router;