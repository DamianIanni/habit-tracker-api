/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";
import { habitType } from "../../types/responseTypes";

export async function updateHabit({
  id,
  user_id,
  name,
  description,
}: habitType) {
  const VALUES = [name, description, id, user_id];
  const QUERY = `UPDATE Habits SET name = ?, description = ? WHERE id = ? AND user_id = ?;)`;

  const [result] = await dbPool.execute(QUERY, VALUES);

  return result;
}
