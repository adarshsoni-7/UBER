# 🚗 Uber-like App API Documentation

## 👥 User Management API

This documentation covers all user-related endpoints for authentication and profile management.

### 📍 Base URL

All endpoints are prefixed with `/users`

### 🔐 Authentication

- JWT tokens are used for authentication
- Tokens can be sent via:
  - Cookie: `token`
  - Header: `Authorization: Bearer <token>`
- Invalid/blacklisted tokens return 401 Unauthorized

## API Endpoints

### 1. Sign Up New User

```http
POST /users/signup
```

**Request Body:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Validation Rules:**

- Firstname: minimum 3 characters
- Lastname: minimum 3 characters
- Email: must be valid email format
- Password: minimum 8 characters

**Success Response (201):**

```json
{
  "user": {
    "_id": "abc123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  },
  "token": "jwt_token_here"
}
```

**Error Responses:**

- 400: Validation errors or user already exists

```json
{
  "errors": [
    {
      "msg": "Firstname must be at least 3 characters long",
      "param": "fullname.firstname"
    }
  ]
}
```

### 2. User Login

```http
POST /users/login
```

**Request Body:**

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Success Response (200):**

```json
{
  "user": {
    "_id": "abc123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  },
  "token": "jwt_token_here"
}
```

**Error Response (400):**

```json
{
  "message": "Invalid email or password"
}
```

### 3. Get User Profile

```http
GET /users/profile
```

**Authentication Required:** ✅

- Must be logged in to access profile
- Without valid token, returns 401 Unauthorized
- Token must be from a successful login

**Success Response (200):**

```json
{
  "_id": "abc123",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

**Error Response (401):**

```json
{
  "message": "Unauthorized"
}
```

_Note: This error occurs when:_

- No token provided
- Invalid/expired token
- Token is blacklisted
- User is not logged in

### 4. User Logout

```http
GET /users/logout
```

**Authentication Required:** ✅

**Success Response (200):**

```json
{
  "message": "Logged out successfully"
}
```

**Error Response (401):**

```json
{
  "message": "Unauthorized"
}
```

## ⚠️ Important Notes

1. **Token Management**

   - Tokens are stored in cookies by default
   - Blacklisted tokens are stored in database
   - After logout, token becomes invalid

2. **Security**

   - All protected routes require valid JWT token
   - Passwords are hashed before storage
   - Email addresses must be unique

3. **Error Handling**
   - 400: Bad Request (validation errors)
   - 401: Unauthorized (invalid/missing token)
   - 500: Server Error (internal issues)
