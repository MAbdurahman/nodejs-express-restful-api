const fs = require('fs');
let books = JSON.parse(fs.readFileSync('./data/booksData.json'));

exports.validateBookId = (req, res, next, value) => {
   console.log('Book ID is ' + value);

   let book = books.find(book => book.id === value * 1);

   if (!book) {
      return res.status(404).json({
         success: false,
         message: `Book with ID ${value} not found!`
      })
   }
   next();

}

exports.validateBody = (req, res, next) => {
   const {
      title,
      author,
      description,
      category,
      price
   } = req.body;

   if (!title || !author || !description || !category || !price) {
      return res.status(400).json({
         success: false,
         message: 'All fields are required!'
      });
   }
   next();
}

exports.createBook = (req, res) => {
   const newId = books[books.length - 1].id + 1;
   const newBook = Object.assign({id: newId}, req.body)
   books.push(newBook);
   fs.writeFile('./data/booksData.json', JSON.stringify(books), (err) => {
      res.status(201).json({
         success: true,
         message: 'Book successfully created!',
         data: {
            book: newBook
         }
      })
   })
}

exports.getAllBooks = (req, res) => {

   res.status(200).json({
      success: true,
      message: 'All Books successfully retrieved!',
      requestedAt: req.requestedAt,
      count: books.length,
      data: {
         books: books
      }
   });
}

exports.getSingleBook = (req, res) => {

   const id = req.params.id * 1;

   let book = books.find(book => book.id === id);

   res.status(200).json({
      success: true,
      message: 'Book successfully retrieved!',
      data: {
         book: book
      }
   });

}

exports.updateBook = (req, res) => {
   console.log('updateBook');
   let id = req.params.id * 1;
   let bookToUpdate = books.find(book => book.id === id);

   let index = books.indexOf(bookToUpdate);

   Object.assign(bookToUpdate, req.body);

   books[index] = bookToUpdate;

   fs.writeFile('./data/booksData.json', JSON.stringify(books), (err) => {
      res.status(200).json({
         success: true,
         message: 'Book successfully updated!',
         data: {
            book: bookToUpdate
         }
      })
   })
}

exports.deleteBook = (req, res) => {
   console.log('deleteBook');
   const id = req.params.id * 1;
   const bookToDelete = books.find(book => book.id === id);

   const index = books.indexOf(bookToDelete);

   books.splice(index, 1);

   fs.writeFile('./data/booksData.json', JSON.stringify(books), (err) => {
      res.status(204).json({
         success: true,
         message: 'Book successfully deleted!',
         data: {
            book: null
         }
      })
   })
}