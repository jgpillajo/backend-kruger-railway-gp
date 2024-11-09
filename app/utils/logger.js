import winston from "winston";

const logFormat =
  winston.format.printf[
    ({ level, message, timestamp }) => {
      return `${timestamp}[${level.toUpperCase()}]: ${message}`;
    }
  ];

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  transports: [
    new winston.transports.Console({ level: "silly" }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "warn",
    }),
  ],
});

//como resgistrar los eventos en consola
//logger.error("hola esto es un error")
//logger.warn("hola esto es un error")
//logger.info("hola esto es un error")
//logger.http("hola esto es un error")
//logger.verbose("hola esto es un error")
//logger.debug("hola esto es un error")
//logger.silly("hola esto es un error")
export default logger;
