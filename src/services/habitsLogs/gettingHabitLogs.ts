import { dbPool } from "../../db";
import { getAllHabitLogsQuery } from "../../queries/habitLogsQueries";

export async function getHabitLogs(id: number) {
  const VALUES = [id];

  const [result] = await dbPool.execute(getAllHabitLogsQuery, VALUES);
  return result;
}
