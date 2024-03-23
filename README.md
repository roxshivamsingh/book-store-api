# Book Store APIs

## Candidate Information

- **Name:** Shivam Singh
- **Email:** roxshivamsingh@gmail.com

## Project Overview

This project involves developing APIs for a book store using Node.js, Express.js, Prisma ORM, and MySQL as the database.

### Technologies Used

- Node.js
- Express.js
- Prisma ORM
- MySQL

## Getting Started

Follow these steps to set up and run the application.

### Installation

- Install project dependencies using the following command:
  ```
  npm install
  ```

### Database Migration

- Perform a one-time database migration using Prisma ORM:
  ```
  npx prisma db push
  ```

### Global Dependency Installation

- Install nodemon globally to facilitate auto-reloading:
  ```
  npm install -g nodemon
  ```

### Running the Application

- Start the application using nodemon:
  ```
  nodemon
  ```

## API Routes

API routes for interacting with different resources in the application:

### Users APIs

- Endpoint: `https://localhost:3000/api/users`

### Book APIs

- Endpoint: `https://localhost:3000/api/books`

### Purchase Log APIs

- Endpoint: `https://localhost:3000/api/purchase/logs`

## Note

This application is still in development. More features and improvements may be added in subsequent updates.
