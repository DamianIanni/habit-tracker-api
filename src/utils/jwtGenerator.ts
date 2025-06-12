import jwt from "jsonwebtoken";

export function jwtGenerator(id: number): string {
  const payload = { id };
  const secret = process.env.JWT_SECRET!;
  const expiresIn = "1h";

  const token = jwt.sign(payload, secret, { expiresIn });

  return token;
}
