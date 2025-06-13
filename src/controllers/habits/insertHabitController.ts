import { habitType } from "../../types/responseTypes";
import { insertHabit } from "../../services/habits";
import { handleSuccessResponse } from "../../utils/responseHandler";

export async function insertHabitController(habit: habitType) {
  const SUCCESS_MESSAGE = "Habit created successfully";

  const allHabits = await insertHabit(habit);
  return handleSuccessResponse(allHabits, SUCCESS_MESSAGE);
}
