import { dbPool } from "../../db";
import { completionPercentage30DaysQuery } from "../../queries/viewQueries";

export async function getCompletionPercentage30days(user_id: number) {
  const VALUES = [user_id];

  const [result] = await dbPool.execute(
    completionPercentage30DaysQuery,
    VALUES
  );

  return result;
}
