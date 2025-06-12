import { handleSuccessResponse } from "../../utils/responseHandler";
import { getHabitLogs } from "../../services/habitsLogs";

export async function getHabitLogsController(id: number) {
  const SUCCESS_RESPONSE = "Successfully retrieved habit logs";
  const result = await getHabitLogs(id);
  return handleSuccessResponse(result, SUCCESS_RESPONSE);
}
