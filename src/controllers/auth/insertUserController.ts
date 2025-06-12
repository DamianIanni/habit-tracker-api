import { insertUser } from "../../services/auth";
import {
  // handleErrorResponse,
  handleSuccessResponse,
} from "../../utils/responseHandler";
import { UserInputType } from "../../types/userType";

export async function insertUserController(user: UserInputType) {
  const SUCCESS_RESPONSE = "User inserted successfully";
  // const ERROR_RESPONSE = "Failed to insert user";

  const result = await insertUser(user);
  return handleSuccessResponse(result, SUCCESS_RESPONSE);
}
