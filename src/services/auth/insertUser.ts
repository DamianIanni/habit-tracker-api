import { dbPool } from "../../db";
import { UserInputType } from "../../types/userType";
import { hashingPassword } from "../../utils/passwordHasher";
import { insertUserQuery } from "../../queries/userQueries";

export async function insertUser(user: UserInputType) {
  const { name, email, password } = user;
  const hashedPassword = await hashingPassword(password);

  const VALUES = [name, email, hashedPassword];

  const [result] = await dbPool.execute(insertUserQuery, VALUES);

  return result;
}
