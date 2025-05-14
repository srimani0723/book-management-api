import morgan from "morgan";
import fs from "fs";
import path from "path";

// for writing in txt
// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, "../logs/access.txt"),
//   { flags: "a" }
// );

// Custom format
const format = ":method :url :status :res[content-length] - :response-time ms";

export const logger = morgan(format, {
  stream: {
    write: (message) => {
      process.stdout.write(message); // Show in terminal
      // accessLogStream.write(message); // Save to access.log
    },
  },
});

export default logger;
