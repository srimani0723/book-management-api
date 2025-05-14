# Book Management API

This is a simple RESTful API for managing books. It allows users to create, read, update, and delete books. It provides endpoints for book-related operations and uses Express.js for the server-side framework.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Running the API](#running-the-api)
- [Testing](#testing)
- [Endpoints](#endpoints)
- [License](#license)

## Backend deployed in Render
### https://book-management-api-p21g.onrender.com
- use postman like api testers
## Description

This API allows users to perform CRUD (Create, Read, Update, Delete) operations on books. Each book has a title, author, and published year. The API is built using Express.js, with TypeScript for type safety, and uses Morgan for logging HTTP requests.

## Features

- Add new books to the library.
- Retrieve a list of all books or a specific book by ID.
- Update existing books.
- Delete books.
- Centralized error handling.
- HTTP request logging using Morgan.
- Unit testing with Jest.

## Tech Stack

- **Backend Framework**: Express.js
- **Programming Language**: TypeScript
- **Database**: In-memory list (for testing purposes)
- **Logging**: Morgan
- **Testing**: Jest, Supertest
- **Other**: Nodemon (for automatic server restarts)

## Setup

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (LTS version)
- npm or yarn (for package management)

### Installation

1.  Clone this repository:

```bash
git clone https://github.com/your-username/book-management-api.git
```

2.  Navigate into the project directory:

```bash
cd book-management-api
```

3.  Install Dependencies

```bash
 npm install
```

## Running the API

### For compiling Typescript:

```bash
npm run build
```

### To start the API in development mode with hot-reloading:

```bash
npm run dev
```

- This will start the server on port 5000/3000. You can now access the API on http://localhost:5000 or http://localhost:3000.

## Testing

### To run tests with Jest:

```bash
npm run test
```

## API Reference

1. ### Get all books

```http
  GET /books
```

### Response

```bash
[
  {
    "id": "1",
    "title": "Wings of Fire",
    "author": "A.P.J. Abdul Kalam",
    "publishedYear": 1999
  },
  ...
]

```

2. ### Get a book

```http
  GET /books/:id
```

### Response

#### 200 OK – Returns an array of book objects.

```bash
  {
    "id": "1",
    "title": "Wings of Fire",
    "author": "A.P.J. Abdul Kalam",
    "publishedYear": 1999
  }
```

#### 404 Not Found

```bash
  {
    message: "No book found"
  }
```

| Parameter | Type     | Description                   |
| :-------- | :------- | :---------------------------- |
| `id`      | `string` | **Required**. BookId to fetch |

3. ### Add a book

```http
  POST /books
```

### Request

| Parameter     | Type     | Description                      |
| :------------ | :------- | :------------------------------- |
| `title`       | `string` | **Required**. Title of the book  |
| `author`      | `string` | **Required**. Author of the book |
| `publishYear` | `number` | **Required**. Year of published  |

### Response

#### 201 created – Returns the created book object.

#### 400 Bad Request – If required fields are missing or invalid.

```bash
  {
      "id": "11",
      "title": "The White Tiger",
      "author": "Aravind Adiga",
      "publishedYear": 2008
   }

```

4. ### Update a book

```http
  PUT /books/:id
```

### Params

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `id`      | `string` | **Required**. BookId to update |

### Request

| Parameter     | Type     | Description            |
| :------------ | :------- | :--------------------- |
| `title`       | `string` | New Title of the book  |
| `author`      | `string` | New Author of the book |
| `publishYear` | `number` | New Year of published  |

#### example

```bash
{
  "title": "The White Tiger - Updated"
}
```

### Response

#### 200 OK – Returns the updated book object.

#### 404 Not Found – If no book exists with the given ID.

```bash
  {
      "id": "2",
      "title": "The White Tiger - Updated",
      "author": "Aravind Adiga",
      "publishedYear": 2008
   }
```

5. ### Delete a book

```http
  DELETE /books/:id
```

### Request

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `id`      | `string` | **Required**. BookId to delete |

### Response

#### 200 OK – Confirmation message if the book is successfully deleted.

#### 404 Not Found – If no book exists with the given ID.

```bash
  {
    message: "Book deleted successfully"
  }
```

6. ### Importing Bulk csv of books data

```http
  POST /books/import
```

### Request

| Parameter | Type  | Description                                 |
| :-------- | :---- | :------------------------------------------ |
| `file`    | `csv` | **Required**. CSV file containing book data |

### Response

#### 201 Created – If books are successfully imported.

#### 400 Bad Request – If the CSV is invalid or improperly formatted.

#### 500 Internal Server Error – For unexpected server errors.

```bash
  {
    "message": "Books imported successfully",
    "importedCount": 10
  }
```

## Features

- 📚 **CRUD Operations**: Create, Read, Update, and Delete books.
- 📥 **CSV Import**: Import multiple books via a CSV file upload.
- 🔍 **ID-based Queries**: Fetch books by unique identifier.
- 🧪 **Unit Testing**: Robust controller tests using Jest.
- 📊 **Logging**: Request logging with Morgan to console and optional file.
- 🧱 **Middleware**: Centralized error handling and custom logging.
- 🚀 **Modular Architecture**: Structured by controllers, services, routes, and middleware.
- 🔧 **Environment Configuration**: Centralized config for easy environment management.
