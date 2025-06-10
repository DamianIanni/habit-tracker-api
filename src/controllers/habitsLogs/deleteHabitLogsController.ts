import { deleteHabitLogs } from "../../services/habitsLogs";
import {
  handleErrorResponse,
  handleSuccessResponse,
} from "../../utils/responseHandler";

export async function deleteHabitLogsController(habit_id: number, id: number) {
  const SUCCESS_RESPONSE = "Habit Logs deleted successfully";
  const ERROR_RESPONSE = "Error deleting habit logs";
  try {
    const result = await deleteHabitLogs(habit_id, id);
    return handleSuccessResponse(result, SUCCESS_RESPONSE);
  } catch (error) {
    return handleErrorResponse(error, ERROR_RESPONSE);
  }
}
