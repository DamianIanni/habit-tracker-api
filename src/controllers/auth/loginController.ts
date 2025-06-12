import { Request, Response } from "express";
import { jwtGenerator } from "../../utils/jwtGenerator";
// import { UserType } from "../../types/userType";
import { handleSuccessResponse } from "../../utils/responseHandler";

export async function loginController(req: Request, res: Response) {
  const { email } = req.body;
  const { id, name } = req.body.user[0];

  const token = jwtGenerator(id);
  const data = {
    user: { name: name, email: email, id: id, token: token },
  };
  res.json(handleSuccessResponse(data, "User returned successfully"));
}
