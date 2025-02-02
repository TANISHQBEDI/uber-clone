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

## User Login
Authenticate an existing user and return a JWT token.

### Endpoint
```
POST /users/login
```

### Request Body
```json
{
  "email": "string",       // required, must be a valid email
  "password": "string"     // required, min length: 6
}
```

### Response
- **200 OK**: User successfully authenticated.
  ```json
  {
    "token": "string", // JWT token
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
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
- **401 Unauthorized**: Invalid credentials.
  ```json
  {
    "errors": "string"
  }
  ```

## User Profile
Get the profile of the authenticated user.

### Endpoint
```
GET /users/profile
```

### Headers
```
Authorization: Bearer <token>
```

### Response
- **200 OK**: User profile data.
  ```json
  {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
  ```
- **401 Unauthorized**: Invalid or missing token.
  ```json
  {
    "errors": "string"
  }
  ```

## User Logout
Logout the authenticated user and invalidate the token.

### Endpoint
```
GET /users/logout
```

### Headers
```
Authorization: Bearer <token>
```

### Response
- **200 OK**: User successfully logged out.
  ```json
  {
    "message": "Logged out successfully"
  }
  ```
- **401 Unauthorized**: Invalid or missing token.
  ```json
  {
    "errors": "string"
  }
  ```

## Captain Registration
Register a new captain in the system.

### Endpoint
```
POST /captains/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "string", // required, min length: 3
    "lastname": "string"   // optional, min length: 3
  },
  "email": "string",       // required, must be a valid email
  "password": "string",    // required, min length: 6
  "vehicle": {
    "color": "string",     // required, min length: 3
    "plate": "string",     // required, min length: 3
    "capacity": "number",  // required, min: 1
    "vehicleType": "string"// required, enum: ['car', 'motorcycle', 'auto']
  }
}
```

### Response
- **201 Created**: Captain successfully registered.
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

## Captain Login
Authenticate an existing captain and return a JWT token.

### Endpoint
```
POST /captains/login
```

### Request Body
```json
{
  "email": "string",       // required, must be a valid email
  "password": "string"     // required, min length: 6
}
```

### Response
- **200 OK**: Captain successfully authenticated.
  ```json
  {
    "token": "string", // JWT token
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleType": "string"
      }
    }
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
- **401 Unauthorized**: Invalid credentials.
  ```json
  {
    "errors": "string"
  }
  ```

## Captain Profile
Get the profile of the authenticated captain.

### Endpoint
```
GET /captains/profile
```

### Headers
```
Authorization: Bearer <token>
```

### Response
- **200 OK**: Captain profile data.
  ```json
  {
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleType": "string"
      }
    }
  }
  ```
- **401 Unauthorized**: Invalid or missing token.
  ```json
  {
    "errors": "string"
  }
  ```

## Captain Logout
Logout the authenticated captain and invalidate the token.

### Endpoint
```
GET /captains/logout
```

### Headers
```
Authorization: Bearer <token>
```

### Response
- **200 OK**: Captain successfully logged out.
  ```json
  {
    "msg": "Logged out successfully"
  }
  ```
- **401 Unauthorized**: Invalid or missing token.
  ```json
  {
    "errors": "string"
  }
  ```
