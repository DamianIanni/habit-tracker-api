import { dbPool } from "../../db";
import { deletHabitLogQuery } from "../../queries/habitLogsQueries";

export async function deleteHabitLogs(habit_id: number, id: number) {
  const VALUES = [habit_id, id];

  const [result] = await dbPool.execute(deletHabitLogQuery, VALUES);
  return result;
}
