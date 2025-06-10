import { dbPool } from "../../db";

export async function getUser(id: number) {
  const QUERY = "SELECT name, email FROM User";
  const [result] = await dbPool.execute(QUERY, id);
  return result;
}
