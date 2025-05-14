"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const errorHandler_1 = require("./middleware/errorHandler");
const logger_1 = __importDefault(require("./middleware/logger"));
const environment_1 = __importDefault(require("./config/environment"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.default = app; // for the testing with jest
app.use(express_1.default.json());
app.use(logger_1.default);
app.use("/books", bookRoutes_1.default);
app.use(errorHandler_1.errorHandler);
app.get("/", (request, response) => {
    response.send("Book Management Home");
});
app.listen(environment_1.default, () => {
    console.log(`Server running on port ${environment_1.default}`);
});
