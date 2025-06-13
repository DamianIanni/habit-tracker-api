import { handleSuccessResponse } from "../../utils/responseHandler";
import { deleteHabit } from "../../services/habits";

export async function deleteHabitController(id: number, user_id: number) {
  const SUCCESS_MESSAGE = "Habit deleted successfully";
  const allHabits = await deleteHabit(id, user_id);
  return handleSuccessResponse(allHabits, SUCCESS_MESSAGE);
}
