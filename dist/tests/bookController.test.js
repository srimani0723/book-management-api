"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
describe("Book Management API", () => {
    // Test: GET /books
    it("should fetch all books", async () => {
        const response = await (0, supertest_1.default)(index_1.default).get("/books");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
