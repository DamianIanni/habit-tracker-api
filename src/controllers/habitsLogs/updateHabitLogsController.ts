import {
  handleErrorResponse,
  handleSuccessResponse,
} from "../../utils/responseHandler";
import { updateHabitLogs } from "../../services/habitsLogs";

export async function updateHabitLogsControllers(
  habit_id: number,
  id: number,
  is_completed: boolean
) {
  const SUCCES_RESPONSE = "Habit Logs updated successfully";
  const ERROR_RESPONSE = "Error updating habit logs";
  try {
    const result = await updateHabitLogs(habit_id, id, is_completed);
    return handleSuccessResponse(result, SUCCES_RESPONSE);
  } catch (error) {
    return handleErrorResponse(error, ERROR_RESPONSE);
  }
}
