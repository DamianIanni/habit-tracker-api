/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";
import { habitType } from "../../types/responseTypes";

export async function insertHabit({ user_id, name, description }: habitType) {
  const VALUES = [user_id, name, description];
  const QUERY = `INSERT INTO Habits (user_id, name, description) (?, ?, ?)`;

  const [result] = await dbPool.execute(QUERY, VALUES);

  return result;
}
