import { dbPool } from "../../../db";
import { updateHabitLogs } from "../../../services/habitsLogs";
import { updateHabitLogQuery } from "../../../queries/habitLogsQueries";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("updateHabitLogs", () => {
  it("It has to update log status from an Habit", async () => {
    const mockedUser = [{ affectedRows: 1, changedRows: 1 }];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedUser]);
    const result = await updateHabitLogs(1, 1, true);
    expect(result).toEqual(mockedUser);
    expect(dbPool.execute).toHaveBeenCalledWith(updateHabitLogQuery, [
      true,
      1,
      1,
    ]);
  });
});
