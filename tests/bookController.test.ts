import request from "supertest";
import app from "../app";
import http from "http";

let server: http.Server;

beforeAll((done) => {
  server = app.listen(4000, done);
});

afterAll((done) => {
  server.close(done);
});

const newBook = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  publishedYear: 1988,
};

describe("Book Management API", () => {
  // Test: GET /books
  it("should fetch all books", async () => {
    const response = await request(app).get("/books");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // // Test: GET /books/:id
  // it("should fetch a book by ID", async () => {
  //   const bookId = "1";
  //   const response = await request(app).get(`/books/${bookId}`);
  //   expect(response.status).toBe(200);
  //   expect(response.body).toHaveProperty("id", bookId);
  // });

  // // Test: POST /books
  // it("should create a new book", async () => {
  //   const response = await request(app)
  //     .post("/books")
  //     .send(newBook)
  //     .set("Content-Type", "application/json");

  //   expect(response.status).toBe(201);
  //   expect(response.body).toHaveProperty("id");
  //   expect(response.body.title).toBe(newBook.title);
  // });

  // // Test: PUT /books/:id
  // it("should update a book", async () => {
  //   const bookId = "1";
  //   const updatedBook = { ...newBook, title: "The Alchemist (Updated)" };
  //   const response = await request(app)
  //     .put(`/books/${bookId}`)
  //     .send(updatedBook)
  //     .set("Content-Type", "application/json");

  //   expect(response.status).toBe(200);
  //   expect(response.body.title).toBe(updatedBook.title);
  // });

  // // Test: DELETE /books/:id
  // it("should delete a book", async () => {
  //   const bookId = "1";
  //   const response = await request(app).delete(`/books/${bookId}`);
  //   expect(response.status).toBe(200);
  //   expect(response.body.message).toBe("Book deleted successfully");
  // });
});
