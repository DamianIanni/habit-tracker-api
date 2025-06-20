import { dbPool } from "../../db";
import { getUserByIdQuery } from "../../queries/userQueries";

export async function getUser(id: number) {
  const [result] = await dbPool.execute(getUserByIdQuery, [id]);
  return result;
}
