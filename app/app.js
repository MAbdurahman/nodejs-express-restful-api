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
   app.use((req, res, next) => {
      logger.info(`${req.method} ${req.url}`);
      next();
   });
}
app.use(express.json());



app.get('/', (req, res) => {
   res.send(`<h2>Welcome to Node.js-Express-Restful-API</h2>`);
});





module.exports = app;