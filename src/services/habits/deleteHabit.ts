/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";

export async function deleteHabit(id: number, user_id: number) {
  const VALUES = [id, user_id];
  const QUERY = ` DELETE FROM Habits WHERE id = ? and user_id = ?`;

  const [result] = await dbPool.execute(QUERY, VALUES);

  return result;
}
