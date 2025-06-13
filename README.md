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

<!-- <pre>  -->

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

<!-- </pre> -->

## Setup and Installation

To get this project running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/DamianIanni/habit-tracker-api.git
    cd habit-tracker-api
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Create a `.env` file in the root directory based on a `.env.example` and fill in your database credentials and JWT secret.
    ```env
    DB_HOST=your_db_host
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    JWT_SECRET=your_jwt_secret
    PORT=your_api_port # e.g., 3000
    ```
4.  **Database Setup:**
    Create the necessary database and tables in your MySQL server.

- **Users table**

  ```bash
  CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
  ```

- **Habits table**

  ```bash
  CREATE TABLE Habits (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
  )
  ```

- **Habits logs table**

  ```bash
  CREATE TABLE Habits_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  habit_id INT,
  log_date DATE NOT NULL,
  is_completed TINYINT(1) NOT NULL,
  FOREIGN KEY (habit_id) REFERENCES Habits(id) ON DELETE CASCADE
  )
  ```

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
- `PATCH /api/users/:id` - Update user details (requires authentication)
- `DELETE /api/users/:id` - Delete user (requires authentication)
- `GET /api/habits` - Get all habits for the authenticated user
- `POST /api/habits` - Create a new habit
- `PATCH /api/habits/:id` - Update a habit
- `DELETE /api/habits/:id` - Delete a habit
- `POST /api/habit-logs` - Log habit completion for a date
- `GET /api/habit-logs/:habitId` - Get logs for a specific habit
- `PATCH /api/habit-logs/:logId` - Update a habit log
- `DELETE /api/habit-logs/:logId` - Delete a habit log

(Note: Adjust endpoint paths based on your actual routing in `src/routes`.)

## Contact

- [LinkedIn](https://www.linkedin.com/in/damian-ianni-b50555205/)
- [GitHub](https://github.com/DamianIanni)
- [damiangussi@gmail.com](mailto:damiangussi@gmail.com)
