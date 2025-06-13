/* eslint-disable prettier/prettier */
import { handleSuccessResponse } from "../../utils/responseHandler";
import { updateHabit } from "../../services/habits";
import { habitType } from "../../types/responseTypes";

export async function updateHabitController(
  updatedHabit: Partial<habitType>,
  id: number,
  user_id: number
) {
  const SUCCESS_MESSAGE = "Habit updated successfully";
  const allHabits = await updateHabit(updatedHabit, id, user_id);
  return handleSuccessResponse(allHabits, SUCCESS_MESSAGE);
}
