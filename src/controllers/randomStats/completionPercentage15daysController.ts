/* eslint-disable prettier/prettier */
import { handleSuccessResponse } from "../../utils/responseHandler";
import { getCompletionPercentage15days } from "../../services/randomStats";

export async function completonPercentage15daysController(user_id: number) {
  // const SUCCES_RESPONSE = `Percentage of habits completed in the last ${timeFrame} days`;
  const SUCCES_RESPONSE = `Percentage of habits completed in the last days`;

  const result = await getCompletionPercentage15days(user_id);
  return handleSuccessResponse(result, SUCCES_RESPONSE);
}
