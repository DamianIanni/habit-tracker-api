import { dbPool } from "../../db";

export async function deleteUser(id: number) {
  const QUERY = "DELETE FROM Users WHERE id = ?";
  const [result] = await dbPool.execute(QUERY, id);
  return result;
}
