import { deleteUser } from "../../services/users";
import { handleSuccessResponse } from "../../utils/responseHandler";

export async function deleteUserController(id: number) {
  const SUCCESS_RESPONSE = "User deleted successfully";

  const result = await deleteUser(id);
  return handleSuccessResponse(result, SUCCESS_RESPONSE);
}
