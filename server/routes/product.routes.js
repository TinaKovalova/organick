const express = require('express');
const router = express.Router();
const products = require('../controllers/product.controller');

router.get('/', products.getAll);
router.get('/:id', products.getById);
router.delete('/:id', products.remove);
router.put('/:id', products.update);
router.post('/', products.add);

module.exports = router;