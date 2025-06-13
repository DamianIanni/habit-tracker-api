/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { hashingPassword } from "./passwordHasher";

function joinQuery(fields: string[]) {
  console.log("Fields,", fields);

  if (fields.length === 0) return;
  if (fields.length <= 1) {
    return fields;
  } else {
    return fields.join(", ");
  }
}

export async function dynamicQuery(
  newValues: Record<string, any>,
  id: number,
  table: string,
  user_id?: number
) {
  const entries = Object.entries(newValues);
  const fieldsToUpdate: string[] = [];
  const VALUES: any[] = [];

  let whereUser_id: string = `WHERE id = ?`;

  for (const [key, value] of entries) {
    fieldsToUpdate.push(`${key} = ?`);

    if (key === "password") {
      const hashed = await hashingPassword(value);
      VALUES.push(hashed);
    } else {
      VALUES.push(value);
    }
  }

  // fieldsToUpdate.push("id");
  VALUES.push(id);

  if (user_id !== undefined && user_id !== null) {
    // fieldsToUpdate.push("user_id");
    VALUES.push(user_id);
    whereUser_id += " AND user_id = ?";
  }

  return {
    query: `UPDATE ${table} SET ${joinQuery(fieldsToUpdate)} ${whereUser_id}`,
    values: VALUES,
  };
}
