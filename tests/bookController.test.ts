import request from "supertest";
import app from "../index";

describe("Book Management API", () => {
  // Test: GET /books
  it("should fetch all books", async () => {
    const response = await request(app).get("/books");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
