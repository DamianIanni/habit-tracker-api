import { handleSuccessResponse } from "../../utils/responseHandler";
import { getAllHabits } from "../../services/habits";

export async function getAllHabitsController(user_id: number) {
  const SUCCESS_MESSAGE = "Habits retrieved successfully";
  const result = await getAllHabits(user_id);
  return handleSuccessResponse(result, SUCCESS_MESSAGE);
}
