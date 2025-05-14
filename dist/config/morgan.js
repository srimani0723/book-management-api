"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const morgan_1 = __importDefault(require("morgan"));
const format = ":method :url :status :res[content-length] - :response-time ms";
exports.logger = (0, morgan_1.default)(format, {
    stream: process.stdout,
});
exports.default = exports.logger;
