"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const morgan_1 = __importDefault(require("morgan"));
// for writing in txt
// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, "../logs/access.txt"),
//   { flags: "a" }
// );
// Custom format
const format = ":method :url :status :res[content-length] - :response-time ms";
exports.logger = (0, morgan_1.default)(format, {
    stream: {
        write: (message) => {
            process.stdout.write(message); // Show in terminal
            // accessLogStream.write(message); // Save to access.log
        },
    },
});
exports.default = exports.logger;
