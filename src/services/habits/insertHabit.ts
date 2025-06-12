/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";
import { habitType } from "../../types/responseTypes";
import { insertHabitQuery } from "../../queries/habitQueries";

export async function insertHabit({ user_id, name, description }: habitType) {
  const VALUES = [user_id, name, description];

  const [result] = await dbPool.execute(insertHabitQuery, VALUES);

  return result;
}
