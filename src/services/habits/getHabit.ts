/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";
import { getHabitQuery } from "../../queries/habitQueries";

export async function getHabit(id: number, user_id: number) {
  const VALUES = [id, user_id];

  const [result] = await dbPool.execute(getHabitQuery, VALUES);

  return result;
}
