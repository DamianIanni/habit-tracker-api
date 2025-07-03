/* eslint-disable prettier/prettier */
import { handleSuccessResponse } from "../../utils/responseHandler";
import { getUserWith3Habits } from "../../services/randomStats";

export async function userWith3HabitsController(user_id: number) {
  // const SUCCES_RESPONSE = `Percentage of habits completed in the last ${timeFrame} days`;
  const SUCCES_RESPONSE = `Percentage of habits completed in the last days`;

  const result = await getUserWith3Habits(user_id);
  return handleSuccessResponse(result, SUCCES_RESPONSE);
}
