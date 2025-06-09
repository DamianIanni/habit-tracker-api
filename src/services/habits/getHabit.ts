/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";

export async function getHabit(id: number) {
  const VALUES = [id];
  const QUERY = `SELECT * FROM Habits WHERE id = ?`;

  const [result] = await dbPool.execute(QUERY, VALUES);

  return result;
}
