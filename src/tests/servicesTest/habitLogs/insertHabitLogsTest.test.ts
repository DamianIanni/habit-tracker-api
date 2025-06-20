import { dbPool } from "../../../db";
import { insertHabitLogs } from "../../../services/habitsLogs";
import { insertHabitLogsQuery } from "../../../queries/habitLogsQueries";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("insertHabitLogs", () => {
  it("It has to insert logs to an Habit", async () => {
    const mockedUser = [{ affectedRows: 1, changedRows: 1 }];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedUser]);
    const result = await insertHabitLogs({
      is_completed: true,
      habit_id: 1,
      log_date: new Date("2025-06-15"),
    });
    expect(result).toEqual(mockedUser);
    expect(dbPool.execute).toHaveBeenCalledWith(insertHabitLogsQuery, [
      true,
      1,
      new Date("2025-06-15"),
    ]);
  });
});
