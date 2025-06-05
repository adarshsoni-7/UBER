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
📍 Maps & Rides API Documentation
This API provides services for maps (like geolocation, distance, suggestions) and ride booking (pickup to destination using selected vehicle types).

🗺️ Maps Routes
📌 1. Get Coordinates
Endpoint:
GET /maps/get-coordinates

Description:
Fetch latitude and longitude of a given address.

Query Parameters:

Parameter	Type	Description	Required
address	string	Full address (min length: 3)	✅ Yes

Success Response (200):

json
Copy
Edit
{
  "ltd": "number",  // Latitude
  "lng": "number"   // Longitude
}
Error Response (404):

json
Copy
Edit
{
  "message": "Coordinates not found"
}
📍 2. Get Distance and Time
Endpoint:
GET /maps/get-distance-time

Description:
Get the travel distance and estimated time between two locations.

Query Parameters:

Parameter	Type	Description	Required
origin	string	Starting point (min length: 3)	✅ Yes
destination	string	Ending point (min length: 3)	✅ Yes

Success Response (200):

json
Copy
Edit
{
  "distance": {
    "text": "string",   // e.g., "5.2 km"
    "value": "number"   // e.g., 5200 (in meters)
  },
  "duration": {
    "text": "string",   // e.g., "10 mins"
    "value": "number"   // e.g., 600 (in seconds)
  },
  "status": "string"    // e.g., "OK"
}
Error Response (404):

json
Copy
Edit
{
  "message": "Distance and time not found"
}
🧠 3. Get Auto Complete Suggestions
Endpoint:
GET /maps/get-suggestions

Description:
Provides location suggestions as the user types input.

Query Parameters:

Parameter	Type	Description	Required
input	string	User input (min: 3 chars)	✅ Yes

Success Response (200):

json
Copy
Edit
[
  {
    "suggestion": "string"  // Suggested location
  }
]
Error Response (404):

json
Copy
Edit
{
  "message": "Suggestions not found"
}
🚕 Ride Routes
🚗 1. Create a Ride
Endpoint:
POST /rides/create

Description:
Create a ride by specifying pickup, destination, and vehicle type.

Request Body:

json
Copy
Edit
{
  "pickup": "string",         // e.g., "Connaught Place"
  "destination": "string",    // e.g., "Indira Gandhi Airport"
  "vehicleType": "string"     // one of: "auto", "car", "moto"
}
Validation Rules:

pickup and destination: at least 3 characters.

vehicleType: must be one of "auto", "car", or "moto".

Success Response (201):

json
Copy
Edit
{
  "ride": {
    "_id": "abc123",
    "pickup": "string",
    "destination": "string",
    "vehicleType": "string",
    "fare": "number"
  }
}
Error Responses:

400 Bad Request (Validation Error):

json
Copy
Edit
{
  "errors": [
    {
      "msg": "string",
      "param": "string"
    }
  ]
}
500 Internal Server Error:

json
Copy
Edit
{
  "error": "string"
}
