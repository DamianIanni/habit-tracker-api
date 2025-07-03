/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";
import { activeStreakByHaitQuery } from "../../queries/viewQueries";

// Returns the longest streak of consecutive completed logs per habit.
export async function getActiveStreakByHaitQuery(user_id: number) {
  const VALUES = [user_id];

  const [result] = await dbPool.execute(activeStreakByHaitQuery, VALUES);

  return result;
}
