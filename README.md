# 🚗 Uber API Documentation

## 🔐 Authentication

All protected endpoints require a valid JWT token which can be provided in two ways:

- Cookie named "token"
- Authorization header as "Bearer token"

## 👤 User Endpoints

### 1️⃣ User Registration

#### Endpoint

```
POST /users/register
```

#### Description

This endpoint allows new users to register in the system. Upon successful registration, it returns the user details along with an authentication token.

#### Request Body Structure

```typescript
{
  fullname: {
    firstname: string; // Required, min length: 3
    lastname: string; // Required, min length: 3
  }
  email: string; // Required, must be valid email format
  password: string; // Required, min length: 8
}
```

#### Field Requirements

##### fullname Object

- **firstname**

  - Type: `string`
  - Required: ✅ Yes
  - Minimum Length: 3 characters
  - Example: "John"

- **lastname**
  - Type: `string`
  - Required: ✅ Yes
  - Minimum Length: 3 characters
  - Example: "Doe"

##### email

- Type: `string`
- Required: ✅ Yes
- Format: Must be valid email address
- Example: "john.doe@example.com"

##### password

- Type: `string`
- Required: ✅ Yes
- Minimum Length: 8 characters
- Example: "password123"

#### Response

##### Success Response (201 Created)

```json
{
  "user": {
    "_id": "user_id",
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

##### Error Responses

###### 400 Bad Request

```json
{
  "errors": [
    {
      "msg": "First name is required",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

###### 500 Internal Server Error

```json
{
  "error": "Error message here"
}
```

### 2️⃣ User Profile

#### Endpoint

```
GET /users/profile
```

#### Description

This endpoint retrieves the profile information of the currently authenticated user. It requires a valid authentication token. If the token is blacklisted (e.g., after logout), the request will be rejected with an unauthorized error.

#### Authentication

- Requires valid JWT token in either:
  - Cookie named "token"
  - Authorization header as "Bearer token"
- Token must not be blacklisted
- Token must be valid and not expired

#### Response

##### Success Response (200 OK)

```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

##### Error Responses

###### 401 Unauthorized

```json
{
  "error": "Unauthorized"
}
```

This error will be returned if:

- ❌ No token is provided
- ❌ Token is invalid or expired
- ❌ Token is blacklisted (e.g., after logout)
- ❌ User associated with token no longer exists

###### 500 Internal Server Error

```json
{
  "error": "Error message here"
}
```

### 3️⃣ User Logout

#### Endpoint

```
GET /users/logout
```

#### Description

This endpoint allows authenticated users to log out of the system. It invalidates the current session token by adding it to a blacklist and clearing the token cookie.

#### Authentication

- Requires valid JWT token in either:
  - Cookie named "token"
  - Authorization header as "Bearer token"

#### Response

##### Success Response (200 OK)

```json
{
  "message": "Logged out successfully"
}
```

##### Error Responses

###### 401 Unauthorized

```json
{
  "error": "Unauthorized"
}
```

###### 500 Internal Server Error

```json
{
  "error": "Error message here"
}
```

#### Important Notes

- ⏰ The blacklisted token will automatically expire after 24 hours
- 🔒 After logout, the user will need to log in again to access protected routes
- 🚫 The token is invalidated immediately upon successful logout

## 🚚 Captain Endpoints

### Register a New Captain

#### Endpoint

```
POST /captains/register
```

#### Description

This endpoint allows new captains to register in the system. Upon successful registration, it returns the captain details along with an authentication token.

> **Note:** The fields `fullname`, `email`, and `password` should be filled exactly as you would when registering a user. These fields follow the same validation rules and requirements as the user registration endpoint.

#### Request Body Structure

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "White",
    "plate": "ABC-123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Field Requirements

##### fullname Object

Same requirements as User Registration - Fill exactly as you would for user registration
 

##### vehicle Object

- **color**

  - Type: `string`
  - Required: ✅ Yes
  - Minimum Length: 3 characters
  - Example: "White"

- **plate**

  - Type: `string`
  - Required: ✅ Yes
  - Minimum Length: 3 characters
  - Example: "ABC-123"

- **capacity**

  - Type: `integer`
  - Required: ✅ Yes
  - Minimum: 1

- **vehicleType**
  - Type: `string`
  - Required: ✅ Yes
  - Must be one of: "car", "motorcycle", "auto"

#### Response

##### Success Response (201 Created)

```json
{
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "White",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "_id": "..."
  },
  "token": "jwt_token_here"
}
```

##### Error Responses

###### 400 Bad Request

```json
{
  "errors": [
    {
      "msg": "First name is required",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

###### 400 Captain Already Exists

```json
{
  "error": "Captain already exists"
}
```

###### 500 Internal Server Error

```json
{
  "error": "Error message here"
}
```
