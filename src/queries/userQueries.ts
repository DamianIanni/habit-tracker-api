export const getUserByEmailQuery =
  "SELECT name, email, id, password_hash FROM Users WHERE email = ?";

export const insertUserQuery =
  "INSERT INTO Users (name, email, password_hash) VALUES (?, ?, ?)";

export const deleteUserQuery = "DELETE FROM Users WHERE id = ?";
export const getUserByIdQuery = "SELECT name, email FROM User WHERE id = ?";
