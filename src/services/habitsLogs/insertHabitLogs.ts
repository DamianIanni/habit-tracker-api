import { dbPool } from "../../db";
import { HabitLogsType } from "../../types/habitLogsTypes";
import { insertHabitLogsQuery } from "../../queries/habitLogsQueries";

export async function insertHabitLogs(log: HabitLogsType) {
  const { is_completed, habit_id, log_date } = log;
  const VALUE = [is_completed, habit_id, log_date];

  const [result] = await dbPool.execute(insertHabitLogsQuery, VALUE);
  return result;
}
