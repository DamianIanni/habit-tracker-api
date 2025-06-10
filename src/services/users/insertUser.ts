import { dbPool } from "../../db";
import { UserInputType } from "../../types/userType";
import { hashingPassword } from "../../utils/passwordHasher";

export async function insertUser(user: UserInputType) {
  const { name, email, password } = user;
  const hashedPassword = await hashingPassword(password);

  const VALUES = [name, email, hashedPassword];
  const QUERY =
    "INSERT INTO Users VALUES (name, email, password_hash) (?, ?, ?)";

  const [result] = await dbPool.execute(QUERY, VALUES);

  return result;
}
