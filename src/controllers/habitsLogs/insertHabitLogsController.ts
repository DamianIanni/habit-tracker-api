import { insertHabitLogs } from "../../services/habitsLogs";
import { HabitLogsType } from "../../types/habitLogsTypes";
import { handleSuccessResponse } from "../../utils/responseHandler";

export async function insertHabitLogsController(habitLogs: HabitLogsType) {
  const SUCCESS_MESSAGE = "Habit logs inserted successfully";
  const result = await insertHabitLogs(habitLogs);
  return handleSuccessResponse(result, SUCCESS_MESSAGE);
}
