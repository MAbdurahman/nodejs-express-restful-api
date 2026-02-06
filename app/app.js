const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const logger = require('./../middlewares/loggerMiddleware');

/************************* setup config file *************************/
if (process.env.NODE_ENV !== 'production') {
   dotenv.config({path: './configs/config.env', quiet: true});
}

/***************************** variables *****************************/
const app = express();
colors.enabled = true;

/************************* middlewares *************************/
if(process.env.NODE_ENV === 'development'){
   // morgan middleware
   app.use(morgan('dev'));
   // logger middleware
   app.use(logger);
}
app.use(express.json());

/*************************** import all routes ***************************/
const homeRoute = require('./../routes/homeRoute');
const booksRoutes = require('./../routes/booksRoute');

/********************************* routes *********************************/
app.use('/', homeRoute);
app.use('/api/v1.0/books', booksRoutes);

module.exports = app;