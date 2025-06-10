import { dbPool } from "../../db";

export async function updateHabitLogs(
  habit_id: number,
  id: number,
  is_completed: boolean
) {
  const VALUES = [is_completed, habit_id, id];
  const QUERY = "SET is_completed = ? WHERE habit_id = ? AND id = ?";

  const [result] = await dbPool.execute(QUERY, VALUES);
  return result;
}
