const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const Comment = require('../store/Comment');

router.get("/products/:id", function(req, res) {
  const id = req.params.id;

  Products.getById(id).then(response => {
    Comment.find({ product: id }).then(comments => {
      res.render("product", {
        product: response[0],
        comments: comments
      });
    });
  });
});

router.post("/products/:id", function (req, res) {

  const data = {
    author: req.body.author,
    comment: req.body.comment,
    product: req.params.id
  };

  Comment.create(data).then(response => {
    res.render("commentSuccess", { comment: response });
  });
});

module.exports = router;
