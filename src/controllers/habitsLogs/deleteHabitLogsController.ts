import { deleteHabitLogs } from "../../services/habitsLogs";
import { handleSuccessResponse } from "../../utils/responseHandler";

export async function deleteHabitLogsController(habit_id: number, id: number) {
  const SUCCESS_RESPONSE = "Habit Logs deleted successfully";
  const result = await deleteHabitLogs(habit_id, id);
  return handleSuccessResponse(result, SUCCESS_RESPONSE);
}
