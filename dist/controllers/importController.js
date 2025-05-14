"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importBooks = exports.uploadCSV = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const bookService_1 = require("../services/bookService");
const upload = (0, multer_1.default)({ dest: "uploads/" });
exports.uploadCSV = upload.single("file");
const importBooks = async (req, res) => {
    if (!req.file) {
        res.status(400).json({ error: "CSV file is required" });
        return;
    }
    const filePath = path_1.default.resolve(req.file.path);
    const data = fs_1.default.readFileSync(filePath, "utf-8");
    const rows = data.trim().split("\n");
    let addedBooksCount = 0;
    const errorRows = [];
    const books = [];
    rows.forEach((row, index) => {
        const [title, author, publishedYear] = row.split(",");
        if (!title || !author || isNaN(Number(publishedYear))) {
            errorRows.push(`Row ${index + 1}: Invalid data`);
        }
        else {
            books.push({
                id: (0, uuid_1.v4)(),
                title: title.trim(),
                author: author.trim(),
                publishedYear: Number(publishedYear.trim()),
            });
            addedBooksCount++;
        }
    });
    // Save books using service
    (0, bookService_1.bulkCreateBooks)(books);
    fs_1.default.unlinkSync(filePath);
    res.status(200).json({ addedBooksCount, errorRows });
};
exports.importBooks = importBooks;
