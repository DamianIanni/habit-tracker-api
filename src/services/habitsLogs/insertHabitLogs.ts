import { dbPool } from "../../db";
import { HabitLogsType } from "../../types/habitLogsTypes";

export async function insertHabitLogs(log: HabitLogsType) {
  const { is_completed, habit_id } = log;
  const VALUE = [is_completed, habit_id];
  const QUERY = `INSERT INTO Habits_logs (is_completed, habit_id) (?, ?)`;

  const [result] = await dbPool.execute(QUERY, VALUE);
  return result;
}
