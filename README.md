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

## 🚕 Captain Management API

This documentation covers all captain-related endpoints for authentication and profile management.

### 📍 Base URL

All endpoints are prefixed with `/captains`

### 🔐 Authentication

- JWT tokens are used for authentication
- Tokens can be sent via:
  - Cookie: `token`
  - Header: `Authorization: Bearer <token>`
- Invalid/blacklisted tokens return 401 Unauthorized

## API Endpoints

### 1. Sign Up New Captain

```http
POST /captains/signup
```

**Request Body:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Blue",
    "plate": "ABC123",
    "vehicleType": "car",
    "capacity": 4
  }
}
```

**Validation Rules:**

- Firstname: minimum 3 characters
- Lastname: minimum 3 characters
- Email: must be valid email format
- Password: minimum 8 characters
- Vehicle color: minimum 3 characters
- Vehicle plate: minimum 3 characters
- Vehicle type: must be one of ["car", "auto", "bike"]
- Capacity: minimum 1

**Success Response (201):**

```json
{
  "captain": {
    "_id": "abc123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC123",
      "vehicleType": "car",
      "capacity": 4
    },
    "status": "inactive",
    "socketId": null
  },
  "token": "jwt_token_here"
}
```

**Error Responses:**

- 400: Validation errors or captain already exists

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

### 2. Captain Login

```http
POST /captains/login
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
  "captain": {
    "_id": "abc123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC123",
      "vehicleType": "car",
      "capacity": 4
    },
    "status": "inactive",
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

### 3. Get Captain Profile

```http
GET /captains/profile
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
  "vehicle": {
    "color": "Blue",
    "plate": "ABC123",
    "vehicleType": "car",
    "capacity": 4
  },
  "status": "inactive",
  "socketId": null
}
```

**Error Response (401):**

```json
{
  "message": "Unauthorized"
}
```

### 4. Captain Logout

```http
GET /captains/logout
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
