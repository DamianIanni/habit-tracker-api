import { dbPool } from "../../../db";
import { getHabit } from "../../../services/habits";
import { getHabitQuery } from "../../../queries/habitQueries";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("getHabit", () => {
  it("It has to return an Habit", async () => {
    const mockedhabit = [
      {
        id: 1,
        name: "habit test",
        description: "test description",
        created_at: "2023-08-01T12:00:00.000Z",
        user_id: 1,
      },
    ];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedhabit]);
    const result = await getHabit(1, 1);
    expect(result).toEqual(mockedhabit);
    expect(dbPool.execute).toHaveBeenCalledWith(getHabitQuery, [1, 1]);
  });
});
