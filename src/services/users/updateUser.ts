/* eslint-disable @typescript-eslint/no-explicit-any */
import { dbPool } from "../../db";
import { UserInputType } from "../../types/userType";
import { dynamicQuery } from "../../utils/dynamicQuery";

export async function updateUser(id: number, user: Partial<UserInputType>) {
  const { query, values } = await dynamicQuery(user, id, "Users");
  console.log(query, values);

  const [result] = await dbPool.execute(query, values);

  return result;
}
