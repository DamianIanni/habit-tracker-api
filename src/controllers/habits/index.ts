import {
  handleSuccessResponse,
  handleErrorResponse,
} from "../../utils/responseHandler";

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
  const ERROR_MESSAGE = "Failed to retrieve habits";
  try {
    const result = await getAllHabits(user_id);
    return handleSuccessResponse(result, SUCCESS_MESSAGE);
  } catch (error) {
    return handleErrorResponse(error, ERROR_MESSAGE);
  }
}

export async function getHabitController(id: number) {
  const SUCCESS_MESSAGE = "Habit retrieved successfully";
  const ERROR_MESSAGE = "Failed to retrieve habit";
  try {
    const result = await getHabit(id);
    return handleSuccessResponse(result, SUCCESS_MESSAGE);
  } catch (error) {
    return handleErrorResponse(error, ERROR_MESSAGE);
  }
}

export async function insertHabitController(habit: habitType) {
  const SUCCESS_MESSAGE = "Habit created successfully";
  const ERROR_MESSAGE = "Failed to create habit";
  try {
    const allHabits = await insertHabit(habit);
    return handleSuccessResponse(allHabits, SUCCESS_MESSAGE);
  } catch (error) {
    return handleErrorResponse(error, ERROR_MESSAGE);
  }
}

export async function deleteHabitController(id: number, user_id: number) {
  const SUCCESS_MESSAGE = "Habit deleted successfully";
  const ERROR_MESSAGE = "Failed to delete habit";
  try {
    const allHabits = await deleteHabit(id, user_id);
    return handleSuccessResponse(allHabits, SUCCESS_MESSAGE);
  } catch (error) {
    return handleErrorResponse(error, ERROR_MESSAGE);
  }
}

export async function updateHabitController(updatedHabit: habitType) {
  const SUCCESS_MESSAGE = "Habit deleted successfully";
  const ERROR_MESSAGE = "Failed to delete habit";
  try {
    const allHabits = await updateHabit(updatedHabit);
    return handleSuccessResponse(allHabits, SUCCESS_MESSAGE);
  } catch (error) {
    return handleErrorResponse(error, ERROR_MESSAGE);
  }
}
