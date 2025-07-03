/* eslint-disable prettier/prettier */
import { handleSuccessResponse } from "../../utils/responseHandler";
import { getLongestStreakByHabit } from "../../services/randomStats";

export async function longerStreakByHabitController(user_id: number) {
  // const SUCCES_RESPONSE = `Percentage of habits completed in the last ${timeFrame} days`;
  const SUCCES_RESPONSE = `Percentage of habits completed in the last days`;

  const result = await getLongestStreakByHabit(user_id);
  return handleSuccessResponse(result, SUCCES_RESPONSE);
}
