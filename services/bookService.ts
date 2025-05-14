import { v4 as uuidv4 } from "uuid";
import { Book } from "../models/bookModel";

let books: Book[] = [
  {
    id: "1",
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    publishedYear: 1999,
  },
  {
    id: "2",
    title: "The White Tiger",
    author: "Aravind Adiga",
    publishedYear: 2008,
  },
  {
    id: "3",
    title: "Train to Pakistan",
    author: "Khushwant Singh",
    publishedYear: 1956,
  },
  {
    id: "4",
    title: "Godan",
    author: "Munshi Premchand",
    publishedYear: 1936,
  },
  {
    id: "5",
    title: "India After Gandhi",
    author: "Ramachandra Guha",
    publishedYear: 2007,
  },
  {
    id: "6",
    title: "The Discovery of India",
    author: "Jawaharlal Nehru",
    publishedYear: 1946,
  },
  {
    id: "7",
    title: "An Era of Darkness",
    author: "Shashi Tharoor",
    publishedYear: 2016,
  },
  {
    id: "8",
    title: "The Inheritance of Loss",
    author: "Kiran Desai",
    publishedYear: 2006,
  },
  {
    id: "9",
    title: "A Suitable Boy",
    author: "Vikram Seth",
    publishedYear: 1993,
  },
  {
    id: "10",
    title: "The Immortals of Meluha",
    author: "Amish Tripathi",
    publishedYear: 2010,
  },
];

export const allBooks = (): Book[] => books;

export const bookById = (id: string) => books.find((book) => book.id === id);

export const createBook = (
  title: string,
  author: string,
  publishedYear: number
): Book => {
  const newBook: Book = { id: uuidv4(), title, author, publishedYear };
  books.push(newBook);
  return newBook;
};

export const updateBook = (
  id: string,
  updatedFields: Partial<Book>
): Book | null => {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return null;
  books[index] = { ...books[index], ...updatedFields };
  return books[index];
};

export const deleteBook = (id: string): boolean => {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
};

export const bulkCreateBooks = (bookList: Book[]): void => {
  books = [...books, ...bookList];
};
