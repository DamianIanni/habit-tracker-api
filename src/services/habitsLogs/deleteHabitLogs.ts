import { dbPool } from "../../db";

export async function deleteHabitLogs(habit_id: number, id: number) {
  const VALUES = [habit_id, id];
  const QUERY = "DELETE FROM Habits_logs WHERE habit_id = ? AND id = ?";

  const [result] = await dbPool.execute(QUERY, VALUES);
  return result;
}
