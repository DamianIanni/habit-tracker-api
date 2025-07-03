/* eslint-disable prettier/prettier */
import { handleSuccessResponse } from "../../utils/responseHandler";
import { getActiveStreakByHaitQuery } from "../../services/randomStats";

export async function activeStreakByHabitController(user_id: number) {
  // const SUCCES_RESPONSE = `Percentage of habits completed in the last ${timeFrame} days`;
  const SUCCES_RESPONSE = `Percentage of habits completed in the last days`;

  const result = await getActiveStreakByHaitQuery(user_id);
  return handleSuccessResponse(result, SUCCES_RESPONSE);
}
