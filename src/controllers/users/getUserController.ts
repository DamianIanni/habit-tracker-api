import { getUser } from "../../services/users";
import {
  handleErrorResponse,
  handleSuccessResponse,
} from "../../utils/responseHandler";

export async function getUserController(id: number) {
  const SUCCESS_RESPONSE = "User updated successfully";
  const ERROR_RESPONSE = "Failed to update the user";

  try {
    const result = await getUser(id);
    return handleSuccessResponse(result, SUCCESS_RESPONSE);
  } catch (error) {
    return handleErrorResponse(error, ERROR_RESPONSE);
  }
}
