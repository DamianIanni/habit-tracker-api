import { handleSuccessResponse } from "../../utils/responseHandler";
import { getHabit } from "../../services/habits";

export async function getHabitController(id: number, user_id: number) {
  const SUCCESS_MESSAGE = "Habit retrieved successfully";
  const result = await getHabit(id, user_id);
  return handleSuccessResponse(result, SUCCESS_MESSAGE);
}
