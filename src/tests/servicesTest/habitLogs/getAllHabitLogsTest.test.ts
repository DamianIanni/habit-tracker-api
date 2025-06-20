import { dbPool } from "../../../db";
import { getHabitLogs } from "../../../services/habitsLogs";
import { getAllHabitLogsQuery } from "../../../queries/habitLogsQueries";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("getAllHabitLogs", () => {
  it("It has to return all logs from an Habit", async () => {
    const mockedUser = [
      {
        id: "habit test",
        habit_id: 1,
        log_date: "2022-01-01",
        is_completed: true,
      },
    ];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedUser]);
    const result = await getHabitLogs(1);
    expect(result).toEqual(mockedUser);
    expect(dbPool.execute).toHaveBeenCalledWith(getAllHabitLogsQuery, [1]);
  });
});
