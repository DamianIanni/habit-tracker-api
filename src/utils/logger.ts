import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(), // log a la consola
    // Podés agregar file transport si querés log en archivo:
    // new transports.File({ filename: "logs/error.log", level: "error" }),
  ],
});

export default logger;
