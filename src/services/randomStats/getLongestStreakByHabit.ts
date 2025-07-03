/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";
import { longerStreakQuery } from "../../queries/viewQueries";

// Returns the longest streak of consecutive completed logs per habit.
export async function getLongestStreakByHabit(user_id: number) {
  const VALUES = [user_id];

  const [result] = await dbPool.execute(longerStreakQuery, VALUES);

  return result;
}
