# Codveda Full-Stack Internship - Level 3, Task 1: Full-Stack Application (MERN)

A complete full-stack application combining a React frontend, an Express/Node.js backend,
MongoDB database, and JWT-based authentication.

## Tech Stack
- MongoDB (via Mongoose)
- Express.js
- React (via Vite)
- Node.js
- JWT authentication with bcrypt password hashing

## Features
- User signup and login (passwords hashed with bcrypt)
- JWT-based authentication, stored in the browser and sent with each request
- Protected routes: only logged-in users can add or delete products
- Public product listing: anyone can view products
- Full CRUD operations on products, backed by a real MongoDB database
- Clean project structure: separate `backend` and `frontend` folders

## Project Structure
```
codveda-task7/
├── backend/
│   ├── models/       (Mongoose schemas: User, Product)
│   ├── routes/       (auth routes, product routes)
│   ├── middleware/   (JWT verification)
│   ├── server.js
│   └── .env.example
└── frontend/
    └── src/
        ├── components/  (Login, Signup, Navbar, ProductList, ProductCard)
        └── App.jsx
```

## How to Run
See `SETUP.md` for full step-by-step instructions.

Quick version:
```
# Backend
cd backend
npm install
npm start

# Frontend (separate terminal)
cd frontend
npm install
npm run dev
```

## Endpoints
| Method | Endpoint | Auth required | Description |
|--------|----------|----------------|-------------|
| POST | /api/auth/signup | No | Create a new account |
| POST | /api/auth/login | No | Log in, returns a JWT |
| GET | /api/products | No | List all products |
| POST | /api/products | Yes | Add a new product |
| PUT | /api/products/:id | Yes | Update a product |
| DELETE | /api/products/:id | Yes | Delete a product |
