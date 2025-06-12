import { dbPool } from "../../db";
import { getUserByEmailQuery } from "../../queries/userQueries";

export async function getUserHelper(email: string) {
  const VALUES = [email];
  const [result] = await dbPool.execute(getUserByEmailQuery, VALUES);
  return result;
}
