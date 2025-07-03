const longerStreakQuery = "SELECT * FROM longerStreak WHERE user_id = ?";
const activeStreakByHaitQuery = "SELECT * FROM activeStreak WHERE habit_id = ?";
const completionPercentage30DaysQuery =
  "SELECT * FROM habits_30_days WHERE user_id = ?";
const completionPercentage15DaysQuery =
  "SELECT * FROM last15DaysCompletionHabitPercent WHERE user_id = ?";
const userWith3HabitsQuery =
  "SELECT * FROM user_with_3_habits WHERE user_id = ?";

export {
  longerStreakQuery,
  activeStreakByHaitQuery,
  completionPercentage30DaysQuery,
  completionPercentage15DaysQuery,
  userWith3HabitsQuery,
};
