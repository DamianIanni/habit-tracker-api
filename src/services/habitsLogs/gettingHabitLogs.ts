import { dbPool } from "../../db";

export async function getHabitLogs(id: number) {
  const VALUES = [id];
  const QUERY = `SELECT * FROM Habit_logs WHERE habit_id = ?`;

  const [result] = await dbPool.execute(QUERY, VALUES);
  return result;
}
