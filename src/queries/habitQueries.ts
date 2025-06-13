export const getHabitQuery = `SELECT * FROM Habits WHERE id = ? and user_id = ?`;
export const getAllHabitQuery = `SELECT * FROM Habits WHERE user_id = ?`;
export const deleteHabitQuery = `DELETE FROM Habits WHERE id = ? and user_id = ?`;
export const insertHabitQuery = `INSERT INTO Habits (user_id, name, description) VALUES (?, ?, ?)`;
