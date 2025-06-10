import { deleteUser } from "../../services/users";
import {
  handleErrorResponse,
  handleSuccessResponse,
} from "../../utils/responseHandler";

export async function deleteUserController(id: number) {
  const SUCCESS_RESPONSE = "User deleted successfully";
  const ERROR_RESPONSE = "Failed to delete the user";

  try {
    const result = await deleteUser(id);
    return handleSuccessResponse(result, SUCCESS_RESPONSE);
  } catch (error) {
    return handleErrorResponse(error, ERROR_RESPONSE);
  }
}
