export const getUserByEmailQuery =
  "SELECT name, email, id, password_hash FROM Users WHERE email = ?";

export const getUserByLogin = "SELECT name, email, id FROM Users WHERE ";

export const insertUserQuery =
  "INSERT INTO Users (name, email, password_hash) VALUES (?, ?, ?)";
