/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";
import { deleteHabitQuery } from "../../queries/habitQueries";

export async function deleteHabit(id: number, user_id: number) {
  const VALUES = [id, user_id];
  const [result] = await dbPool.execute(deleteHabitQuery, VALUES);

  return result;
}
