const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${level}] [${timestamp}] : ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'Logs.log' })
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'combined.log' }),
  ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
// if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({
//       format: winston.format.simple(),
//     }));
//   }

module.exports = logger;