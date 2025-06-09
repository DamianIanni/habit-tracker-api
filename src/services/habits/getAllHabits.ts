/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";

export async function getAllHabits(user_id: number) {
  const VALUES = [user_id];
  const QUERY = `SELECT * FROM Habits WHERE user_id = ?`;

  const [result] = await dbPool.execute(QUERY, VALUES);

  return result;
}
