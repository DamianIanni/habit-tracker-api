/* eslint-disable prettier/prettier */
import { updateUser } from "../../services/users";
import { handleSuccessResponse } from "../../utils/responseHandler";
import { UserInputType } from "../../types/userType";

export async function updateUserController(
  id: number,
  user: Partial<UserInputType>
) {
  const SUCCESS_RESPONSE = "User updated successfully";

  const result = await updateUser(id, user);
  return handleSuccessResponse(result, SUCCESS_RESPONSE);
}
