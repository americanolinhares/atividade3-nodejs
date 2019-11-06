const express = require('express');
const router = express.Router();
const Products = require('../store/Products');

router.get('/products/:id', function (req, res, next) {
  console.log('Request Id:', req.params.id);
  product = Products.getById(req.params.id);
  res.product = product;
  next();
});

module.exports = router;
