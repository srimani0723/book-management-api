import { Request, Response } from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { bulkCreateBooks } from "../services/bookService";

const upload = multer({ dest: "uploads/" });
export const uploadCSV = upload.single("file");

export const importBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (!req.file) {
    res.status(400).json({ error: "CSV file is required" });
    return;
  }

  const filePath = path.resolve(req.file.path);
  const data = fs.readFileSync(filePath, "utf-8");
  const rows = data.trim().split("\n");

  let addedBooksCount = 0;
  const errorRows: string[] = [];
  const books: any = [];

  rows.forEach((row, index) => {
    const [title, author, publishedYear] = row.split(",");

    if (!title || !author || isNaN(Number(publishedYear))) {
      errorRows.push(`Row ${index + 1}: Invalid data`);
    } else {
      books.push({
        id: uuidv4(),
        title: title.trim(),
        author: author.trim(),
        publishedYear: Number(publishedYear.trim()),
      });
      addedBooksCount++;
    }
  });

  // Save books using service
  bulkCreateBooks(books);

  fs.unlinkSync(filePath);
  res.status(200).json({ addedBooksCount, errorRows });
};
