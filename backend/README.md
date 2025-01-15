# API Documentation

## User Registration
Register a new user in the system.

### Endpoint
```
POST /users/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "string", // required, min length: 3
    "lastname": "string"   // optional, min length: 3
  },
  "email": "string",       // required, must be a valid email
  "password": "string"     // required, min length: 6
}
```

### Response
- **201 Created**: User successfully registered.
  ```json
  {
    "token": "string" // JWT token
  }
  ```
- **400 Bad Request**: Validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```
