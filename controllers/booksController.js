const fs = require('fs');
const dotenv = require('dotenv');

let books = JSON.parse(fs.readFileSync('./data/booksData.json'));

console.log(books);

exports.validateBookId = (req, res, next, value) => {

   console.log('validateBookId');

}

exports.validateBody = (req, res, next) => {
   console.log('validateBody');
}

exports.getAllBooks = (req, res) => {
   console.log('getAllBooks');
}

exports.getBookById = (req, res) => {
   console.log('getBookById');
}

exports.createBook = (req, res) => {
   console.log('createBook');
}


exports.updateBook = (req, res) => {
   console.log('updateBook');
}

exports.deleteBook = (req, res) => {
   console.log('deleteBook');
}