import morgan from "morgan";

const format = ":method :url :status :res[content-length] - :response-time ms";

export const logger = morgan(format, {
  stream: process.stdout,
});

export default logger;
