import bcrypt from "bcrypt";

const saltRounds = 10;

export async function hashingPassword(password: string) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log("Error hashing password", error);
  }
}
