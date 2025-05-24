# Uber API Documentation

## User Registration

### Endpoint

```
POST /users/register
```

### Description

This endpoint allows new users to register in the system. Upon successful registration, it returns the user details along with an authentication token.

### Required Fields

```json
{
  "fullname": {
    "firstname": "John", // string, minimum 3 characters
    "lastname": "Doe" // string, minimum 3 characters
  },
  "email": "john.doe@example.com", // valid email format
  "password": "password123" // minimum 8 characters
}
```

### Validation Rules

- First name must be at least 3 characters long
- Last name must be at least 3 characters long
- Email must be in valid format
- Password must be at least 8 characters long

### Response

#### Success Response (201 Created)

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

#### Error Responses

##### 400 Bad Request

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

##### 500 Internal Server Error

```json
{
  "error": "Error message here"
}
```

### Example Usage

#### cURL

```bash
curl -X POST http://your-api-url/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```

#### JavaScript (Fetch)

```javascript
const response = await fetch("http://your-api-url/users/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    fullname: {
      firstname: "John",
      lastname: "Doe",
    },
    email: "john.doe@example.com",
    password: "password123",
  }),
});

const data = await response.json();
```
