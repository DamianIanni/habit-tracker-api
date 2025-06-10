import { dbPool } from "../../db";
import { UserInputType } from "../../types/userType";
import { hashingPassword } from "../../utils/passwordHasher";

export async function updateUser(id: number, user: Partial<UserInputType>) {
  const { name, email, password } = user;

  const fieldsToUpdate: string[] = [];
  const VALUES: any[] = [];

  if (name !== undefined) {
    fieldsToUpdate.push("name = ?");
    VALUES.push(name);
  }

  if (email !== undefined) {
    fieldsToUpdate.push("email = ?");
    VALUES.push(email);
  }

  if (password !== undefined) {
    const hashedPassword = await hashingPassword(password);
    fieldsToUpdate.push("password_hash = ?");
    VALUES.push(hashedPassword);
  }

  if (fieldsToUpdate.length === 0) {
    throw new Error("No fields provided to update");
  }

  const QUERY = `
      UPDATE Users
      SET ${fieldsToUpdate.join(", ")}
      WHERE id = ? ;
    `;

  VALUES.push(id); // el id va al final

  const [result] = await dbPool.execute(QUERY, VALUES);

  return result;
}
