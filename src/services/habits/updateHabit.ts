/* eslint-disable prettier/prettier */
import { dbPool } from "../../db";
import { habitType } from "../../types/responseTypes";
import { dynamicQuery } from "../../utils/dynamicQuery";

export async function updateHabit(
  habit: Partial<habitType>,
  id: number,
  user_id: number
) {
  const TABLE = "Habits";
  const { query, values } = await dynamicQuery(habit, id, TABLE, user_id);
  const [result] = await dbPool.execute(query, values);

  return result;
}
