/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";
import { getAllHabitQuery } from "../../queries/habitQueries";

export async function getAllHabits(user_id: number) {
  const VALUES = [user_id];
  const [result] = await dbPool.execute(getAllHabitQuery, VALUES);

  return result;
}
