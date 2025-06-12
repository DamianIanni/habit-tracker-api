export const deletHabitLogQuery = `DELETE FROM Habits_logs WHERE habit_id = ? AND id = ?`;
export const getAllHabitLogsQuery = `SELECT * FROM Habits_logs WHERE habit_id =?`;
export const insertHabitLogsQuery = `INSERT INTO Habits_logs (is_completed, habit_id) (?, ?)`;
export const updateHabitLogQuery = `UPDATE Habits_logs SET is_completed = ? WHERE habit_id = ? AND id = ?`;
