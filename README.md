# Uber API Documentation

## User Registration

### Endpoint

```
POST /users/register
```

### Description

This endpoint allows new users to register in the system. Upon successful registration, it returns the user details along with an authentication token.

### Request Body Structure

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

### Field Requirements

#### fullname Object

- **firstname**

  - Type: `string`
  - Required: Yes
  - Minimum Length: 3 characters
  - Example: "John"

- **lastname**
  - Type: `string`
  - Required: Yes
  - Minimum Length: 3 characters
  - Example: "Doe"

#### email

- Type: `string`
- Required: Yes
- Format: Must be valid email address
- Example: "john.doe@example.com"

#### password

- Type: `string`
- Required: Yes
- Minimum Length: 8 characters
- Example: "password123"

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
