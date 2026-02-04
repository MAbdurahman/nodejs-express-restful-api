const winston = require('winston');
const colors = require('colors');
colors.enabled = true;

const logger = winston.createLogger({
   level: 'info',
   format: winston.format.combine(
      winston.format.timestamp({format: 'MM-DD-YYYY HH:mm:ss.SSS'}),
      winston.format.json()

   ),
   transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' })
   ]
});

module.exports = logger;