import { dbPool } from "../../db";

export async function getUser(id: number) {
  const QUERY = "SELECT name, email FROM User WHERE id = ?";
  const [result] = await dbPool.execute(QUERY, id);
  return result;
}
