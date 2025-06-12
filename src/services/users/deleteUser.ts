import { dbPool } from "../../db";
import { deleteUserQuery } from "../../queries/userQueries";

export async function deleteUser(id: number) {
  const VALUES = [id];
  const [result] = await dbPool.execute(deleteUserQuery, VALUES);
  return result;
}
