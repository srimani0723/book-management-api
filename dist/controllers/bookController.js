"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
const bookService = __importStar(require("../services/bookService"));
const getAllBooks = (req, res, next) => {
    try {
        const books = bookService.allBooks();
        if (books.length === 0) {
            res.status(404).json({ message: "no books found" });
        }
        res.status(200).json(books);
    }
    catch (err) {
        next(err);
    }
};
exports.getAllBooks = getAllBooks;
const getBookById = async (req, res, next) => {
    try {
        const book = await bookService.bookById(req.params.id);
        if (!book) {
            res.status(404).json({ message: "Book not found" });
            return;
        }
        res.status(200).json(book);
    }
    catch (err) {
        next(err);
    }
};
exports.getBookById = getBookById;
const createBook = (req, res) => {
    const { title, author, publishedYear } = req.body;
    const newBook = bookService.createBook(title, author, publishedYear);
    res.status(201).json(newBook);
};
exports.createBook = createBook;
const updateBook = async (req, res) => {
    const updated = await bookService.updateBook(req.params.id, req.body);
    if (!updated) {
        res.status(404).json({ message: "Book not found" });
        return;
    }
    res.status(200).json(updated);
};
exports.updateBook = updateBook;
const deleteBook = async (req, res) => {
    const deleted = bookService.deleteBook(req.params.id);
    if (!deleted) {
        res.status(404).json({ message: "Book not found" });
        return;
    }
    res.status(200).json({ message: "Book deleted successfully" });
};
exports.deleteBook = deleteBook;
