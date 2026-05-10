# backend-repo
backend assignment

---

README.md (Backend Assignment)

```md id="r1readme"
# Backend Assignment - Node.js + MongoDB APIs



--Project Overview

This assignment contains two RESTful API projects built using:

- Node.js
- Express.js
- MongoDB (Mongoose)
- MVC Architecture
- REST API principles

---

#  Project Structure

```



````

---

#  TASK 1: Student Management API

## Features
- Create, Read, Update, Delete (CRUD) students
- Search students by name
- Filter by department
- Pagination support
- Soft delete (deactivate student)
- Input validation and error handling

## Schema Fields
- rollNumber (unique)
- name
- email (unique)
- department
- cgpa (0.0 - 4.0)
- enrollmentYear
- isActive

## API Endpoints

### Students
```
POST   /api/students
GET    /api/students
GET    /api/students/:id
PUT    /api/students/:id
PATCH  /api/students/:id
DELETE /api/students/:id
````

### Extra Features

```
GET  /api/students/search?name=
GET  /api/students?department=&page=&limit=
PATCH /api/students/:id/deactivate
```

---

#  TASK 2: Blog Application API

## Features

* User registration with password hashing (bcrypt)
* Blog posts with tags
* Comments system
* MongoDB relationships (ObjectId references)
* populate() for relational data
* Cascade delete comments

---

## Schemas

### User

* username
* email
* password (hashed)
* createdAt

### Post

* title
* content
* author (ref User)
* tags
* createdAt

### Comment

* text
* post (ref Post)
* user (ref User)
* createdAt

---

## API Endpoints

### Users

```
POST /api/users/register
GET  /api/users
GET  /api/users/:id
```

### Posts

```
POST   /api/posts
GET    /api/posts
GET    /api/posts/:id
PUT    /api/posts/:id
DELETE /api/posts/:id
```

### Extra Post Features

```
GET /api/posts/tag/:tag
```

### Comments

```
POST   /api/posts/:postId/comments
GET    /api/posts/:postId/comments
DELETE /api/comments/:id
```

---

# ⚙️ Installation & Setup

## 1. Install dependencies

```
npm install
```

## 2. Create .env file

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/yourDatabase
```

## 3. Run project

```
npm run dev
```

---

# 🧾 Tools Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman
* bcrypt.js

---

#  Notes

* node_modules is NOT included in submission
* All APIs tested using Postman
* Proper status codes used (200, 201, 400, 404, 500)
* MVC architecture followed

---




