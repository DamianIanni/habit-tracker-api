/* eslint-disable prettier/prettier */
import { handleSuccessResponse } from "../../utils/responseHandler";

// import { getAllHabits } from "../../services/habits/getAllHabits";
import {
  deleteHabit,
  getAllHabits,
  getHabit,
  insertHabit,
  updateHabit,
} from "../../services/habits";
import { habitType } from "../../types/responseTypes";

export async function getAllHabitsController(user_id: number) {
  const SUCCESS_MESSAGE = "Habits retrieved successfully";
  const result = await getAllHabits(user_id);
  return handleSuccessResponse(result, SUCCESS_MESSAGE);
}

export async function getHabitController(id: number, user_id: number) {
  const SUCCESS_MESSAGE = "Habit retrieved successfully";
  const result = await getHabit(id, user_id);
  return handleSuccessResponse(result, SUCCESS_MESSAGE);
}

export async function insertHabitController(habit: habitType) {
  const SUCCESS_MESSAGE = "Habit created successfully";

  const allHabits = await insertHabit(habit);
  return handleSuccessResponse(allHabits, SUCCESS_MESSAGE);
}

export async function deleteHabitController(id: number, user_id: number) {
  const SUCCESS_MESSAGE = "Habit deleted successfully";
  const allHabits = await deleteHabit(id, user_id);
  return handleSuccessResponse(allHabits, SUCCESS_MESSAGE);
}

export async function updateHabitController(
  updatedHabit: Partial<habitType>,
  id: number,
  user_id: number
) {
  const SUCCESS_MESSAGE = "Habit deleted successfully";
  const allHabits = await updateHabit(updatedHabit, id, user_id);
  return handleSuccessResponse(allHabits, SUCCESS_MESSAGE);
}
