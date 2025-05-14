"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkCreateBooks = exports.deleteBook = exports.updateBook = exports.createBook = exports.bookById = exports.allBooks = void 0;
const uuid_1 = require("uuid");
let books = [];
// [
//   {
//     id: "1",
//     title: "Wings of Fire",
//     author: "A.P.J. Abdul Kalam",
//     publishedYear: 1999,
//   },
//   {
//     id: "2",
//     title: "The White Tiger",
//     author: "Aravind Adiga",
//     publishedYear: 2008,
//   },
//   {
//     id: "3",
//     title: "Train to Pakistan",
//     author: "Khushwant Singh",
//     publishedYear: 1956,
//   },
//   {
//     id: "4",
//     title: "Godan",
//     author: "Munshi Premchand",
//     publishedYear: 1936,
//   },
//   {
//     id: "5",
//     title: "India After Gandhi",
//     author: "Ramachandra Guha",
//     publishedYear: 2007,
//   },
//   {
//     id: "6",
//     title: "The Discovery of India",
//     author: "Jawaharlal Nehru",
//     publishedYear: 1946,
//   },
//   {
//     id: "7",
//     title: "An Era of Darkness",
//     author: "Shashi Tharoor",
//     publishedYear: 2016,
//   },
//   {
//     id: "8",
//     title: "The Inheritance of Loss",
//     author: "Kiran Desai",
//     publishedYear: 2006,
//   },
//   {
//     id: "9",
//     title: "A Suitable Boy",
//     author: "Vikram Seth",
//     publishedYear: 1993,
//   },
//   {
//     id: "10",
//     title: "The Immortals of Meluha",
//     author: "Amish Tripathi",
//     publishedYear: 2010,
//   },
// ];
const allBooks = () => books;
exports.allBooks = allBooks;
const bookById = (id) => books.find((book) => book.id === id);
exports.bookById = bookById;
const createBook = (title, author, publishedYear) => {
    const newBook = { id: (0, uuid_1.v4)(), title, author, publishedYear };
    books.push(newBook);
    return newBook;
};
exports.createBook = createBook;
const updateBook = (id, updatedFields) => {
    const index = books.findIndex((book) => book.id === id);
    if (index === -1)
        return null;
    books[index] = { ...books[index], ...updatedFields };
    return books[index];
};
exports.updateBook = updateBook;
const deleteBook = (id) => {
    const index = books.findIndex((book) => book.id === id);
    if (index === -1)
        return false;
    books.splice(index, 1);
    return true;
};
exports.deleteBook = deleteBook;
const bulkCreateBooks = (bookList) => {
    books = [...books, ...bookList];
};
exports.bulkCreateBooks = bulkCreateBooks;
