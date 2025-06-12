/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";
import { updateHabitLogQuery } from "../../queries/habitLogsQueries";

export async function updateHabitLogs(
  habit_id: number,
  id: number,
  is_completed: boolean
) {
  const VALUES = [is_completed, habit_id, id];

  const [result] = await dbPool.execute(updateHabitLogQuery, VALUES);
  return result;
}
