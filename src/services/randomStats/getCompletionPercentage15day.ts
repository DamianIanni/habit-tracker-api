import { dbPool } from "../../db";
import { completionPercentage15DaysQuery } from "../../queries/viewQueries";

export async function getCompletionPercentage15days(user_id: number) {
  const VALUES = [user_id];

  const [result] = await dbPool.execute(
    completionPercentage15DaysQuery,
    VALUES
  );

  return result;
}
