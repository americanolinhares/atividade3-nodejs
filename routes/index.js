const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const Comment = require('../store/Comment');

router.get('/', function (_, res) {
  Products.get()
    .then(function (products) {
      res.render('index', { products });
    })
});

module.exports = router;
