/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";
import { userWith3HabitsQuery } from "../../queries/viewQueries";

// Returns the longest streak of consecutive completed logs per habit.
export async function getUserWith3Habits(user_id: number) {
  const VALUES = [user_id];

  const [result] = await dbPool.execute(userWith3HabitsQuery, VALUES);

  return result;
}
