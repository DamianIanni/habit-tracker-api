<!-- # habit-tracker-api

## Overview

The Habit Tracker API is a RESTful service designed to help users manage and track their habits over time. It allows users to create, update, delete, and retrieve their habits, as well as log their progress.

## Features

- User authentication and authorization
- Create, read, update, and delete habits
- Log daily progress for each habit
- Retrieve habit statistics and history
- Support for multiple users

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Postman or any API testing tool

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/habit-tracker-api.git
   ```
2. Navigate to the project directory:
   ```
   cd habit-tracker-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory and add the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

### Running the API

To start the server, run:

```
npm start
```

The API will be running at `http://localhost:3000`.

## API Endpoints

### User Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in an existing user

### Habit Management

- `POST /api/habits` - Create a new habit
- `GET /api/habits` - Retrieve all habits for the authenticated user
- `GET /api/habits/:id` - Retrieve a specific habit by ID
- `PUT /api/habits/:id` - Update a habit by ID
- `DELETE /api/habits/:id` - Delete a habit by ID

### Progress Logging

- `POST /api/habits/:id/progress` - Log progress for a specific habit
- `GET /api/habits/:id/progress` - Retrieve progress logs for a specific habit

## Testing

To run tests, use the following command:

```
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

# Habit Tracker API

A robust backend API for a habit tracking application, designed to manage users, habits, and daily habit logs. This project demonstrates a solid foundation in backend development using Node.js, Express, and TypeScript, with a focus on clean architecture, data security, and efficient database interactions.

This API is built as part of a fullstack project to showcase backend development skills, including RESTful API design, authentication, data modeling, and error handling.

## Features

- **User Authentication:** Secure user registration and login using JWT (JSON Web Tokens) and bcrypt for password hashing.
- **User Management:** Endpoints for retrieving, updating, and deleting user profiles.
- **Habit Management:** CRUD operations for managing user habits (create, read, update, delete).
- **Habit Log Tracking:** Endpoints to record, retrieve, update, and delete daily habit completion logs.
- **Data Validation:** Input validation to ensure data integrity.
- **Error Handling:** Centralized error handling middleware for consistent API responses.
- **Logging:** Implementation of logging using Winston for monitoring and debugging.

## Technologies Used

- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MySQL (using `mysql2` driver)
- **Authentication:** JWT (jsonwebtoken), bcrypt/bcryptjs
- **Utilities:** dotenv (environment variables), cors (CORS handling), winston (logging)
- **Development Tools:** Nodemon (auto-restarts), ESLint, Prettier (linting and formatting), ts-node (TypeScript execution)

## Project Structure

The project follows a layered architecture to ensure separation of concerns:

<pre> 
src/ 
├── controllers/ # Handles incoming requests and delegates to services 
├── services/ # Contains business logic and interacts with the database 
├── routes/ # Defines API endpoints and links them to controllers 
├── db/ # Database connection and configuration 
├── middlewares/ # Express middleware for authentication, error handling, etc. 
├── queries/ # SQL query definitions 
├── types/ # TypeScript type definitions 
├── utils/ # Helper functions (password hashing, JWT generation, response handling, logging) 
├── app.ts # Express application setup 
└── index.ts # Application entry point
</pre>

## Setup and Installation

To get this project running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd habit-tracker-api
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Create a `.env` file in the root directory based on a `.env.example` (you might need to create one if it doesn't exist) and fill in your database credentials and JWT secret.
    ```env
    DB_HOST=your_db_host
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    JWT_SECRET=your_jwt_secret
    PORT=your_api_port # e.g., 3000
    ```
4.  **Database Setup:**
    Create the necessary database and tables in your MySQL server. You will need to provide the SQL schema or migration scripts if they exist (mention if they are included or need to be provided separately).
5.  **Run the application:**
    - **Development Mode:**
      ```bash
      npm run dev
      ```
    - **Production Mode:**
      ```bash
      npm start
      ```

The API should now be running at `http://localhost:<PORT>`.

## API Endpoints

(Provide a brief overview of key endpoints. For a full list and details, consider linking to API documentation like Swagger if available, or list the main routes here.)

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user and get a JWT
- `GET /api/users/:id` - Get user details (requires authentication)
- `PUT /api/users/:id` - Update user details (requires authentication)
- `DELETE /api/users/:id` - Delete user (requires authentication)
- `GET /api/habits` - Get all habits for the authenticated user
- `POST /api/habits` - Create a new habit
- `PUT /api/habits/:id` - Update a habit
- `DELETE /api/habits/:id` - Delete a habit
- `POST /api/habit-logs` - Log habit completion for a date
- `GET /api/habit-logs/:habitId` - Get logs for a specific habit
- `PUT /api/habit-logs/:logId` - Update a habit log
- `DELETE /api/habit-logs/:logId` - Delete a habit log

(Note: Adjust endpoint paths based on your actual routing in `src/routes`.)

## Contributing

(Section on how others can contribute - optional)

## License

This project is licensed under the ISC License.

## Contact

(Your contact information - e.g., LinkedIn, GitHub profile link)
