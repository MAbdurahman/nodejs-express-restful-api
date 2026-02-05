const express = require('express');
const booksController = require('./../controllers/booksController');

const router = express.Router();

router.param('id', booksController.validateBookId);

router.route('/')
   .get(booksController.getAllBooks)
   .post(booksController.validateBody, booksController.createBook);

router.route('/:id')
   .get(booksController.getSingleBook)
   .patch(booksController.updateBook)
   .delete(booksController.deleteBook);

module.exports = router;