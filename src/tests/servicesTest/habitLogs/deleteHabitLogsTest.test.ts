import { dbPool } from "../../../db";
import { deleteHabitLogs } from "../../../services/habitsLogs";
import { deletHabitLogQuery } from "../../../queries/habitLogsQueries";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("deleteAllHabitLogs", () => {
  it("It has to deltee all logs from an Habit", async () => {
    const mockedUser = [{ affectedRows: 1, changedRows: 1 }];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedUser]);
    const result = await deleteHabitLogs(1, 1);
    expect(result).toEqual(mockedUser);
    expect(dbPool.execute).toHaveBeenCalledWith(deletHabitLogQuery, [1, 1]);
  });
});
