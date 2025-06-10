import { insertHabitLogs } from "../../services/habitsLogs";
import { HabitLogsType } from "../../types/habitLogsTypes";
import {
  handleErrorResponse,
  handleSuccessResponse,
} from "../../utils/responseHandler";

export async function insertHabitLogsController(habitLogs: HabitLogsType) {
  const SUCCESS_MESSAGE = "Habit logs inserted successfully";
  const ERROR_MESSAGE = "Failed to insert habit logs";
  try {
    const result = await insertHabitLogs(habitLogs);
    return handleSuccessResponse(result, SUCCESS_MESSAGE);
  } catch (error) {
    return handleErrorResponse(error, ERROR_MESSAGE);
  }
}
