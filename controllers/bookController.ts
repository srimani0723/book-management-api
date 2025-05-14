import { Request, Response, NextFunction } from "express";
import * as bookService from "../services/bookService";

export const getAllBooks = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = bookService.allBooks();
    if (books.length === 0) {
      res.status(404).json({ message: "no books found" });
      return;
    }
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const book = await bookService.bookById(req.params.id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
      return;
    }
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

export const createBook = (req: Request, res: Response) => {
  const { title, author, publishedYear } = req.body;
  const newBook = bookService.createBook(title, author, publishedYear);
  res.status(201).json(newBook);
};

export const updateBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  const updated = await bookService.updateBook(req.params.id, req.body);

  if (!updated) {
    res.status(404).json({ message: "Book not found" });
    return;
  }

  res.status(200).json(updated);
};

export const deleteBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  const deleted = await bookService.deleteBook(req.params.id);

  if (!deleted) {
    res.status(404).json({ message: "Book not found" });
    return;
  }

  res.status(200).json({ message: "Book deleted successfully" });
};
