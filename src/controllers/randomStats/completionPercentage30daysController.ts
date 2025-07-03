/* eslint-disable prettier/prettier */
import { handleSuccessResponse } from "../../utils/responseHandler";
import { getCompletionPercentage30days } from "../../services/randomStats";

export async function completonPercentage30daysController(user_id: number) {
  // const SUCCES_RESPONSE = `Percentage of habits completed in the last ${timeFrame} days`;
  const SUCCES_RESPONSE = `Percentage of habits completed in the last days`;

  const result = await getCompletionPercentage30days(user_id);
  return handleSuccessResponse(result, SUCCES_RESPONSE);
}
