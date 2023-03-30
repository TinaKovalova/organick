const express = require('express');
const router = express.Router();
const subscriber = require('../controllers/subscriber.controller');

router.get('/', subscriber.getAll);
router.get('/:id', subscriber.getById);
router.delete('/:id', subscriber.remove);
router.put('/:id', subscriber.update);
router.post('/', subscriber.add);

module.exports = router;