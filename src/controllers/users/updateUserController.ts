import { updateUser } from "../../services/users";
import {
  handleErrorResponse,
  handleSuccessResponse,
} from "../../utils/responseHandler";
import { UserInputType } from "../../types/userType";

export async function updateUserController(
  id: number,
  user: Partial<UserInputType>
) {
  const SUCCESS_RESPONSE = "User updated successfully";
  const ERROR_RESPONSE = "Failed to update the user";

  try {
    const result = await updateUser(id, user);
    return handleSuccessResponse(result, SUCCESS_RESPONSE);
  } catch (error) {
    return handleErrorResponse(error, ERROR_RESPONSE);
  }
}
